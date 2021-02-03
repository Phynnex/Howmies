import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue'),
    children: [
      { path: '', name: 'home', component: () => import('../views/home/homeChildren/Home.vue') },
      { path: '/search', name: 'search', component: () => import('../views/home/homeChildren/Search.vue') },
      { path: '/login', name: 'login', component: () => import('../views/home/homeChildren/Login.vue') },
      { path: '/saved', name: 'saved', component: () => import('../views/home/homeChildren/Saved.vue') },
      { path: '/signup', name: 'signup', component: () => import('@/views/home/homeChildren/Signup.vue') },
      { path: '/account', name: 'account', component: () => import('@/views/home/homeChildren/Account.vue') },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/list-your-property',
    component: () => import('../views/PropertyInfo/index.vue'),
    children: [
      { path: '', component: () => import('../views/PropertyInfo/ListYourProperty.vue') },
      { path: 'check-property', component: () => import('../views/PropertyInfo/CheckProperty.vue') },
      { path: 'contact-details', component: () => import('../views/PropertyInfo/ContactDetails.vue') },
      { path: 'property-location', component: () => import('../views/PropertyInfo/Location.vue') },
      {
        path: 'property-details',
        component: () => import('../views/PropertyInfo/PropertyDetails.vue'),
        children: [
          { path: 'house', component: () => import('../views/describeProperty/House&Apartment.vue') },
          { path: 'apartment', component: () => import('../views/describeProperty/House&Apartment.vue') },
          { path: 'land', component: () => import('../views/describeProperty/Land.vue') },
          { path: 'store', component: () => import('../views/describeProperty/Store.vue') },
        ],
      },
      { path: 'features', component: () => import('@/views/PropertyInfo/Features.vue') },
      { path: 'add-photo', component: () => import('@/views/PropertyInfo/AddPhoto.vue') },
      { path: 'price', component: () => import('@/views/PropertyInfo/Price.vue') },
    ],
  },
  {
    path: '/property-details/:propertyId',
    name: 'property-detail',
    component: () => import('@/views/property-details/Index.vue'),
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
