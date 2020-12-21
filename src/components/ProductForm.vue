<template>
<div class="d-flex flex-column justify-content-center align-items-center">
    <div class="card">
        <div class=" card-header"> <h4>Nuevo producto</h4> </div>
        <div class=" card-body">
                <div v-if="id">
                    <label>Id:</label>
                    <input type="number" v-model="producto.id" min="0" required>
                </div>
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" v-model="producto.name" minlength="3" required>
                </div>
                <div class="form-group">
                    <label>Price:</label>
                    <input type="number" v-model="producto.price" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label>Unidades:</label>
                    <input type="number" v-model="producto.units" min="1" max="100" required>
                </div>
                <button @click="add" class="btn btn-default btn-primary">Añadir</button>
                <button @click="reset" class="btn btn-secondary">Reset</button>
        </div>
    </div>
</div>
</template>
<script>
import { store } from './store.js';
import APIService from './APIService.js'

export default {
    props:['id'],
    data() {
        return {
            producto:{}
        }
    },
    methods: {
        add(){
            if(!this.id){
                if(this.producto.name && this.Precio && this.Unidades){
                store.add(this.producto);
                this.reset();
                this.$router.push('/');
            }
            else{
                APIService.put(this.producto)
                .then(response=> this.producto=response.data)
                .catch(error=>console.error('Error: '+(error.statusText || error.message || error)))
                store.getTodos();
            }
        }
            
        },
        reset(){
            this.producto={};
        },
    },
    mounted(){
        if(this.id){
            APIService.find(this.id)
        .then(response=>
            this.producto=response.data)
        .catch(error=>console.error('Error: '+(error.statusText || error.message || error)))
        }
        
    }
 }

</script>

<style>

</style>