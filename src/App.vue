<template>
  <div id="app">
    <p>@ibsheet/loader v{{loaderVersion}}</p>
    <div class="main-navs">
      <h3>Go to Pages:</h3>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/page1">Page1</router-link></li>
        <li><router-link to="/page2">Page2</router-link></li>
      </ul>  
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import loader from '@ibsheet/loader'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: HelloWorld },
    { path: '/page1', name: 'page1', component: Page1 },
    { path: '/page2', name: 'page2', component: Page2 }
  ]
})

loader.config({
  registry: [{
    name: 'ibsheet',
    baseUrl: '/ibsheet'
  }]
})

export default {
  name: 'app',
  data() {
    return {
      loaderVersion: loader.version
    }
  },
  router
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main-navs {
  > h3 {
    margin: 40px 0 0;  
  }
  > ul {
    list-style-type: none;
    padding: 0;
    > li {
      display: inline-block;
      margin: 0 10px;
      a > {
        color: #42b983;
      }
    }
  }
}
</style>
