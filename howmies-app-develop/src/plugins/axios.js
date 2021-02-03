/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */

import Vue from 'vue';
import axios from 'axios';
import apiUrl from '@/services/config';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.NODE_ENV === 'development' ? apiUrl : apiUrl,
  timeout: 30 * 1000, // Timeout
  withCredentials: false, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const { token } = localStorage;
    config.headers.authorization = token ? `${token}` : '';
    return config;
  },
  error =>
    // Do something with request error
    Promise.reject(error),

);

// Add a response interceptor
_axios.interceptors.response.use(
  response =>
    // Do something with response data
    response,
  error =>
    // Do something with response error
    Promise.reject(error),

);

Plugin.install = function (Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default _axios;
