import axios from 'axios';
import { AuthenticationService } from '../auth/AuthenticationService.js';

// const ApiClient = window.origin;

const headers = () => (
  {
     'Content-Type': 'application/json',
     Accept: 'application/json',
     Authorization: `Bearer ${AuthenticationService.getToken()}`,
  }
);

export const ApiRequester = {
  authenticate: (params) => (
    axios.post(`authenticate`, params).then( (resp) => {
      return resp;
    })
  ),

  get: (path, params) => (
    axios.get(`${path}`, {
      headers: headers(),
      params
    })
    .then((resp) => {
        return resp;
    })
  ),

  post: (path, params) => (
    axios.post(`${path}`, params, {
      headers: headers(),
    })
    .then((resp) => {
      return resp;
    })
  ),

  delete: (path, params) => (
    axios.delete(`${path}`,{
      headers: headers(), 
      params
    })
    .then((resp) => {
      return resp;
    })
  ),
};
