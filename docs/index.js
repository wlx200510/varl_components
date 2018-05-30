// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import registerRoute from './router.config';
import navConfig from './nav.config';
// import Vui from 'src/index.js'
import './assets/index.css';
import './assets/docs.css';
import './assets/nprogress.css';
import progress from 'nprogress';

Vue.config.productionTip = false;
// Vue.use(Vui)
Vue.use(VueRouter);

const routesConfig = registerRoute(navConfig);
const isProduction = process.env.NODE_ENV === 'production';
routesConfig.push({
  path: '/',
  redirect: '/components/intro'
});
routesConfig.push({
  path: '/components',
  redirect: '/components/intro'
});

const router = new VueRouter({
  base: isProduction ? '/' : __dirname,
  routes: routesConfig
});
router.beforeEach((route, redirect, next) => {
  progress.start();
  if (route.path !== '/') {
    window.scrollTo(0, 0);
  }

  document.title = route.meta.title || document.title;
  next();
});
router.beforeResolve((to, from, next) => {
  progress.done();
  next();
});
/* eslint-disable no-new */
new Vue({
  el: '#app-container',
  router,
  components: { App },
  template: '<App/>'
});
