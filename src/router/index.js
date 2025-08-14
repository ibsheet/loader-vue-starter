import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../components/Home.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/page1', component: Page1},
    {path: '/page2', component: Page2}
  ]
})

export default router
