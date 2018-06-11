class KudoSerializer < ActiveModel::Serializer
  attributes :id, :text, :given_at, :giver

  def giver
    object.giver.first_name + " " + object.giver.last_name
  end

  def given_at
    object.created_at.to_formatted_s(:long_ordinal)
  end
end
