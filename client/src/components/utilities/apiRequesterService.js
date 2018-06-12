import axios from 'axios';
import { AuthenticationService } from '../utilities/AuthenticationService.js';

// const ApiClient = window.origin;

const headers = () => (
  {
     'Content-Type': 'application/json',
     Accept: 'application/json',
     Authorization: `Bearer ${AuthenticationService.get_token()}`,
  }
);

export const ApiRequester = {
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
    axios.post(`${path}`, {
      headers: headers(), 
      params
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
