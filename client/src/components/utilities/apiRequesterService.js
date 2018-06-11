import axios from 'axios';

const ApiClient = window.origin;

export const ApiRequester = {
  get: (path, params) => (
    axios.get(`${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),

  post: (path, params) => (
    axios.post(`${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),

  delete: (path, params) => (
    axios.delete(`${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),
};
