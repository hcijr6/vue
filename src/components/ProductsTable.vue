<template>
    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12" id="almacen">
            <table class="table table-striped table-hover">
                <thead class="thead-dark" id="almacenfinal">
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Uds.</th>
                        <th>Precio/u</th>
                        <th>Importe</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody v-if="productos.length">
                    <product-item 
                        v-for="(item,index) in productos" 
                        :key="item.id"
                        :producto="item"
                        :indice="index">
                    </product-item>
                </tbody>
                <p v-else>No hay tareas que mostrar</p>

            </table>
            <p class="lead float-right">Importe total del almacén: <strong id="total">0.00 €</strong></p>
        </div>
    </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
import { store } from './store.js';
export default{
    components:{
        ProductItem
    },
    data() {
        return {
            productos: store.state.productos,
        }
    },
    mounted() {
        store.getTodos();
    }
} 
</script>

<style>

</style>