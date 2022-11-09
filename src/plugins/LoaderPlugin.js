import loader from '@ibsheet/loader';

export default {
  install(Vue) {
    Vue.prototype.$_Loader = loader;
  }
}