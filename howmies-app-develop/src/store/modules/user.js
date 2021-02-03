import JwtService from '@/services/jwtService';
import axios from '@/plugins/axios';

const loginNotification = message => ({
  display: true,
  color: 'success',
  text: message,
});

export default {
  state: {
    isAuthenticated: !!JwtService.getToken(),
    user: JSON.parse(JwtService.getToken('data')),
    error: '',
  },
  getters: {
    profilePhoto(state) {
      if (state.user) {
        const name = state.user.username.split(' ');
        const firstLetterOfFirstName = name[0].charAt(0).toUpperCase();
        const lastLetterOfLastName = name[1].charAt(0).toUpperCase();
        return `${firstLetterOfFirstName}${lastLetterOfLastName}`;
      }
      return 'MT';
    },
    getError: (state) => {
      if (Array.isArray(state.error)) return state.error[0].msg;
      return state.error;
    },
  },
  mutations: {
    SET_AUTH(state, user) {
      state.isAuthenticated = true;
      state.user = user.data.data;
      state.error = {};
      JwtService.saveRefreshToken('refreshToken', user.data.data.refreshToken);
      JwtService.saveToken('user', user.headers.authorization);
      JwtService.saveToken('data', JSON.stringify(user.data.data));
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    REMOVE_AUTH(state) {
      state.isAuthenticated = false;
      state.user = {};
      state.error = {};
      JwtService.destroyToken();
      JwtService.destroyToken('data');
    },
  },
  actions: {
    LOGIN({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('auth/users/login', payload)
          .then(user => {
            commit('SET_AUTH', user);
            commit('setNotification', loginNotification('Login was successful'));
            resolve();
          })
          .catch(({ response }) => {
            reject();
            commit('SET_ERROR', response.data.message);
          });
      });
    },
    REGISTER({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('auth/users/signup', payload)
          .then(user => {
            commit('SET_AUTH', user);
            commit('setNotification', loginNotification('Your account has been created successfully'));
            resolve();
          })
          .catch(({ response }) => {
            console.log(response.data);
            commit('SET_ERROR', response.data.message);
            reject();
          });
      });
    },
    LOGOUT({ commit }) {
      commit('REMOVE_AUTH');
    },
    UPDATE_USER({ commit }, payload) {
      const {
        email, username, password, image, bio,
      } = payload;
      const user = {
        email,
        username,
        bio,
        image,
      };
      if (password) {
        user.password = password;
      }

      return axios.put('user', user).then(({ data }) => {
        commit('SET_AUTH', data.user);
        return data;
      });
    },
  },
};
