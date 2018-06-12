import { ApiRequester } from '../utilities/ApiRequesterService.js';

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
    });
  },
  logout: (cb) => {
    window.sessionStorage.removeItem('kudoserverAccessToken');
    setTimeout(cb, 100);
  }
};