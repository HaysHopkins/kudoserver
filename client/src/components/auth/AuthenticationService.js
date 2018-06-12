import { ApiRequester } from '../utilities/ApiRequesterService.js';

export const AuthenticationService = {
  isAuthenticated: () => {
    return window.sessionStorage.kudoserverAccessToken != null;
  },
  getToken: () => {
    return window.sessionStorage.kudoserverAccessToken;
  },
  authenticate: (cb) => {
    ApiRequester.post(`authenticate`, {}).then((resp) => {
      window.sessionStorage.kudoserverAccessToken = "test";
      setTimeout(cb, 100);
    });
  },
  signout: (cb) => {
    window.sessionStorage.removeItem('kudoserverAccessToken');
    setTimeout(cb, 100);
  }
};