import vuetify from '../../plugins/vuetify';

export default {
  state: {
    showLess: true,
    properties: [
      {
        id: 1,
        status: 'For Sale',
        src: [
          'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&w=1000&q=80',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
          'https://www.indianfolk.com/wp-content/uploads/2019/06/B3-DM067_RIGHTS_IM_20190319162958.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
        ],
        location: 'Ajah',
        price: '₦320,000 per year',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 12,
        route: '/property-details',
      },
      {
        id: 2,
        status: 'For Rent',
        src: [
          'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&w=1000&q=80',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
        ],
        location: 'CMD Road, Magodo',
        price: '₦350,000 <span class="body-1">per year<span>',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 6,
        route: '/property-details',
      },
      {
        id: 3,
        status: 'For Rent',
        src: [
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
        ],
        location: 'Nwuigwe, Woji',
        price: '₦420,000 <span class="body-1">per year<span>',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 6,
        route: '/property-details',
      },
      {
        id: 4,
        status: 'For Rent',
        src: [
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
        ],
        location: 'Alcon, Woji',
        price: '₦420,000 <span class="body-1">per year<span>',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 6,
        route: '/property-details',
      },
      {
        id: 5,
        status: 'For Rent',
        src: [
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
        ],
        location: 'Golf Estate',
        price: '₦420,000 <span class="body-1">per year<span>',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 6,
        route: '/property-details',
      },
      {
        id: 6,
        status: 'For Rent',
        src: [
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
        ],
        location: 'Agege',
        price: '₦420,000 <span class="body-1">per year<span>',
        beds: '3',
        baths: '2',
        sqFt: '500',
        flex: 6,
        route: '/property-details',
      },
    ],
  },
  getters: {
    getProperties: state => {
      if (vuetify.framework.breakpoint.xsOnly && state.showLess) return state.properties.slice(0, 2);
      if (vuetify.framework.breakpoint.smOnly && state.showLess) return state.properties.slice(0, 3);
      if (vuetify.framework.breakpoint.mdAndUp && state.showLess) return state.properties.slice(0, 4);
      return state.properties;
    },
    getTopProperties: state => {
      if (vuetify.framework.breakpoint.xsOnly && state.showLess) return state.properties.slice(0, 4);
      if (vuetify.framework.breakpoint.smOnly && state.showLess) return state.properties.slice(0, 6);
      if (vuetify.framework.breakpoint.mdAndUp && state.showLess) return state.properties.slice(0, 8);
      return state.properties;
    },
  },
  mutations: {
    SHOW_MORE: state => (state.showLess = !state.showLess),
  },
  actions: {},
};
