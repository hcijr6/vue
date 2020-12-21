import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductsTable from '../components/ProductsTable.vue'
import ProductForm from '../components/ProductForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabla',
    component: ProductsTable
  },{
    path: '/form',
    name: 'form',
    component: ProductForm
  },{
    path: '/edit/:id',
    name: 'edit',
    props:true,
    component: ProductForm
  }
];

const router = new VueRouter({
  mode: 'history',	// en Vue3 cambiaremos esta línea por 	history: createWebHistory(),
  routes,
});

export default router