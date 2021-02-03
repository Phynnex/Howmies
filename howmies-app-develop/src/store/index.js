/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-cycle */
import Vue from 'vue';
import Vuex from 'vuex';
import postProperties from './modules/postProperties';
import user from './modules/user';
import ui from './modules/setupUi';
import property from './modules/property';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post: postProperties,
    user,
    ui,
    property,
  },
});
