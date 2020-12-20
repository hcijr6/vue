<template>
  <div id="app" class="container-fluid">
    <app-menu></app-menu>
    <products-table></products-table>
    <product-form></product-form>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
import ProductsTable from './components/ProductsTable.vue'
import ProductForm from './components/ProductForm.vue'

export default {
  name: 'App',
  components: {
    AppMenu,
    ProductsTable,
    ProductForm
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
