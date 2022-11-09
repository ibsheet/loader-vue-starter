<template>
  <div id="app">
    <p>@ibsheet/loader v{{loaderVersion}}</p>
    <div class="main-navs">
      <h3>Go to Pages:</h3>
      <ul>
        <router-link to="/" tag="li" :class="{active: $route.matched[0].name !== 'page1'}">Home</router-link>
        <router-link to="/page1" tag="li" :class="'actvie'">Page1</router-link>
        <router-link to="/page2" tag="li" :class="'actvie'">Page2</router-link>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      loaderVersion: this.$_Loader.version
    }
  },
  created() {
    this.$_Loader.config({
      registry: [{
        name: 'ibsheet',
        baseUrl: '/ibsheet'
      }]
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
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
      // a > {
      //   color: #42b983;
      // }
    }
  }
}

.router-link-exact-active {
  color: aquamarine
}
</style>
