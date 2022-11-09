import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Page1 from '@/components/Page1.vue';
import Page2 from '@/components/Page2.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/page1', name: 'page1', component: Page1 },
    { path: '/page2', name: 'page2', component: Page2 }
  ]
});

export default router;