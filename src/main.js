import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// 라우터 사용 추가
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')