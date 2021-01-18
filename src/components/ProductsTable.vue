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
                <tbody v-if="this.productos.length">
                    <product-item 
                        v-for="(item,index) in this.productos" 
                        :key="item.id"
                        :producto="item"
                        :indice="index">
                    </product-item>
                </tbody>
                <p v-else>No hay tareas que mostrar</p>

            </table>
            <p class="lead float-right">Importe total del almacén: <strong id="total">{{totalImport}}€</strong></p>
        </div>
    </div>
</template>
<script>
import ProductItem from './ProductItem.vue'

export default{
    components:{
        ProductItem
    },
    data() {
        return {
            
        }
    },
    computed:{
        productos () {
            this.$store.dispatch('loadData');
            return this.$store.state.productos;
        },
        loading() {
            return this.$store.state.loading
        },
        totalImport(){
            return this.productos.reduce((total,actual)=> total + Number(actual.price)*Number(actual.units),0)
        }
    }
}
</script>

<style>

</style>