require 'rails_helper'

RSpec.describe 'Kudos API', type: :request do 
  let!(:kudos) { create_list(:kudo, 25) }
  let(:kudo_id) { kudos.first.id } 

  describe 'GET /kudos' do 
    before { get '/kudos' }

    it 'returns all kudos' do 
      response_body = JSON.parse(response.body)

      expect(response_body).not_to be_empty
      expect(response_body).size).to eq(25)
    end

    it 'returns status code 200' do 
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /kudos' do 
    let(:text) { Faker::Matz.quote[0..139] }

    context 'with a valid request' do 
      let(:valid_params) do 
        {
          text: text,
          giver_id: 1,
          receiver_id: 2
        }
      end

      before { post '/kudos', params: valid_params } 

      it 'creates a kudo' do 
        expect(JSON.parse(response.body)['text']).to eq(text)

        should { change(Kudo, :count).by(1) } 
      end

      it 'returns status code 201' do 
        expect(response).to have_http_status(201)
      end
    end

    context 'with an invalid request' do 
      let(:invalid_params) { { text: text } }

      before { post '/kudos', params: invalid_params } 

      it 'returns status code 422' do 
        expect(response).to have_http_status(422)
      end

      it 'returns error message' do 
        expect(response.body).to match(/Giver can't be blank/)
        expect(response.body).to match(/Receiver can't be blank/)
      end
    end
  end

  describe 'DELETE /kudos/:id' do 
    before { delete "/kudos/#{kudo_id}" }

    it 'returns status code 204' do 
      expect(response). to have_http_status(204)
    end

    it 'deletes the kudo' do 
      should { change(Kudo, :count).by(1) } 
    end
  end
end