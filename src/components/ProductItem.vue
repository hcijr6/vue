<template>
  <tr>
    <td>{{producto.id}}</td>
    <td>{{producto.name}}</td>
    <td>{{producto.units}}</td>
    <td>{{producto.price}} €</td>
    <td>{{ producto.price * producto.units }} €</td>
    <td><b-icon 
      icon="pencil-fill" 
      @click="editProd(producto.id)"></b-icon>
        <b-icon
        icon="trash-fill"
        @click="removeProd(producto.id)"></b-icon>
    </td>
  </tr>
</template>

<script>
import { store } from './store.js';

export default{
  props:['producto'],
  methods: {
    removeProd(id){
      store.delete(id);
    },
    editProd(){
      this.$router.push('/edit/'+this.producto.id)

    }
  },
}
</script>

<style>

</style>