/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
// import axios from 'axios';
export default {
  state: {
    progress: 12.5,
    show: false,
    rentOutlined: true,
    saleOutlined: true,
    leaseOutlined: true,
    list: {
      propertyType: '',
      statusType: '',
      name: '',
      email: '',
      phone: '',
      altPhone: '',
      countryCode: '',
      altCountryCode: '',
      isCompany: false,
      companyName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      room: '',
      bathroom: '',
      averageRoomSize: null,
      plot: '',
      features: {
        selectedFeatures: [],
        additionalFeatures: [],
      },
      price: '',
      period: 'Per year',
    },
    imageUrl: [],
    properties: [
      { title: 'Apartment', outlined: true },
      { title: 'House', outlined: true },
      { title: 'Land', outlined: true },
      { title: 'Venue', outlined: true },
    // { title: 'Hotel', outlined: true },
    // { title: 'Office', outlined: true },
    // { title: 'Store', outlined: true },
    ],
  },

  getters: {
    updateProgress: state => amount => state.progress * amount,
  },
  actions: {},
  mutations: {
    getPropertyType(state) {
      if (sessionStorage.propertyType) state.list.propertyType = sessionStorage.propertyType;
      state.properties.forEach((property) => {
        if (property.title === state.list.propertyType) {
          if (property.outlined !== false) {
            state.rentOutlined = true;
            state.saleOutlined = true;
            state.leaseOutlined = true;
            state.list.statusType = '';
          }
          property.outlined = false;
          state.show = true;
        }
      });
    },
    getStatusType(state) {
      if (sessionStorage.statusType) state.list.statusType = sessionStorage.statusType;
      if (state.list.statusType === 'rent') state.rentOutlined = false;
      else state.rentOutlined = true;
      if (state.list.statusType === 'sale') state.saleOutlined = false;
      else state.saleOutlined = true;
      if (state.list.statusType === 'lease') state.leaseOutlined = false;
      else state.leaseOutlined = true;
    },
    updateName(state, payload) {
      state.list.name = payload;
    },
    updateEmail(state, payload) {
      state.list.email = payload;
    },
    updatePhone(state, payload) {
      state.list.phone = payload;
    },
    updateAltPhone(state, payload) {
      state.list.altPhone = payload;
    },
    updateCountryCode(state, payload) {
      state.list.countryCode = payload;
    },
    updateAltCountryCode(state, payload) {
      state.list.altCountryCode = payload;
    },
    updateIsCompany(state, payload) {
      state.list.isCompany = payload;
    },
    updateCompanyName(state, payload) {
      state.list.companyName = payload;
    },
    updateAddress(state, payload) {
      state.list.address = payload;
    },
    updateCountry(state, payload) {
      if (sessionStorage.propertyCountry) state.list.country = payload;
    },
    updateState(state, payload) {
      state.list.state = payload;
    },
    updateCity(state, payload) {
      state.list.city = payload;
    },
    updateRoom(state, payload) {
      state.list.room = payload;
    },
    updateBathroom(state, payload) {
      state.list.bathroom = payload;
    },
    updateAverageRoomSize(state, payload) {
      state.list.averageRoomSize = payload;
    },
    updatePlot(state, payload) {
      state.list.plot = payload;
    },
    updateFeatures(state, payload) {
      if (sessionStorage.features) state.list.features.selectedFeatures = JSON.parse(sessionStorage.getItem('features'));
      if (payload) state.list.features.selectedFeatures = payload;
    },
    addFeature(state, featureToAdd) {
      state.list.features.additionalFeatures.unshift(featureToAdd);
    },
    updateAdditionalfeatures(state) {
      state.list.features.additionalFeatures = JSON.parse(sessionStorage.featureToAdd);
    },
    updateImageUrl(state, payload) {
      state.imageUrl = payload;
    },
    updatePrice(state, payload) {
      state.list.price = payload;
    },
    updatePeriod(state, payload) {
      state.list.period = payload;
    },
  },

};
