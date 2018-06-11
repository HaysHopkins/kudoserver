import axios from 'axios';

const ApiClient = window.origin;

export const ApiRequester = {
  get: (path, params) => (
    axios.get(`${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),

  put: (path, params) => (
    axios.put(`${ApiClient}/api/${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),

  delete: (path, params) => (
    axios.delete(`${ApiClient}/api/${path}`, params)
      .then((resp) => {
        return resp;
      })
  ),
};
