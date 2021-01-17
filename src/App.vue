<template>
  <div id="app" class="container-fluid">
    <app-menu></app-menu>
    <router-view></router-view>

  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'


export default {
  name: 'App',
  components: {
    AppMenu,

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
