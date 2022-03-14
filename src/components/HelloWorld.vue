<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable no-console */
import loader from '@ibsheet/loader';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'IBSheetLoader for Vue!'
    }
  },
  mounted() {
    loader.unload();
  }
}
</script>
