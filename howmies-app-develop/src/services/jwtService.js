export default {
  getToken: (tokenKey = 'user') => window.localStorage.getItem(tokenKey),
  saveToken: (tokenKey, token) => window.localStorage.setItem(tokenKey, token),
  destroyToken: (tokenKey = 'user') => window.localStorage.removeItem(tokenKey),
  saveRefreshToken(tokenName, tokenValue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${tokenName}=${tokenValue};${expires};path=/`;
  },
};
