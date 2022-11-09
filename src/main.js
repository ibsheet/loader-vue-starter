import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import LoaderPlugin from '@/plugins/LoaderPlugin.js';

Vue.config.productionTip = false;
Vue.use(LoaderPlugin);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
