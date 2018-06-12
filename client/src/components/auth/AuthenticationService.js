import { ApiRequester } from '../utilities/ApiRequesterService.js';
import Error from '../utilities/Error.js';

export const AuthenticationService = {
  isAuthenticated: () => {
    return window.sessionStorage.kudoserverAccessToken != null;
  },
  getToken: () => {
    return window.sessionStorage.kudoserverAccessToken;
  },
  authenticate: (params, cb) => {
    ApiRequester.authenticate(params).then((resp) => {
      window.sessionStorage.kudoserverAccessToken = resp.data.auth_token;
      setTimeout(cb, 100);
    }).catch((resp) => {
      Error.report(resp.message);
    });
  },
  signUp: (params, cb) => {
    ApiRequester.post('users', params).then((resp) => {
      window.sessionStorage.kudoserverAccessToken = resp.data.auth_token;
      setTimeout(cb, 100);
    }).catch((resp) => {
      Error.report(resp.message);
    });;
  },
  logout: (cb) => {
    window.sessionStorage.removeItem('kudoserverAccessToken');
    setTimeout(cb, 100);
  }
};