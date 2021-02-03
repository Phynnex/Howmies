/* eslint-disable no-return-assign */
export default {
  state: {
    drawer: false,
    notification: {
      display: false,
      text: '',
      color: 'success',
    },
  },
  mutations: {
    setDrawer: (state, payload) => state.drawer = payload,
    setNotification(state, notification) {
      state.notification.display = notification.display;
      state.notification.text = notification.text;
      state.notification.color = notification.color;
    },
  },
  actions: {},
};
