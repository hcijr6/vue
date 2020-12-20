<template>
    <div class="col-sm-6 col-md-4 col-lg-4">
        
            <fieldset>
                <legend>Nuevo producto</legend>

                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" v-model="Nombre" minlength="3" required>
                </div>
                <div class="form-group">
                    <label>Price:</label>
                    <input type="number" v-model="Precio" min="0" step="0.01" required>
                </div>
                <div class="form-group">
                    <label>Unidades:</label>
                    <input type="number" v-model="Unidades" min="1" max="100" required>
                </div>
                <button @click="add" class="btn btn-default btn-primary">Añadir</button>
                <button @click="reset" class="btn btn-secondary">Reset</button>
            </fieldset>
    </div>
</template>
<script>
import { store } from './store.js';

export default {
    data() {
        return {
            Nombre:'',
            Precio:'',
            Unidades:''
        }
    },
    methods: {
        add(){
            if(this.Nombre && this.Precio && this.Unidades){
                store.add({
                    "name": this.Nombre,
                    "price": this.Precio,
                    "units": this.Unidades
                })
                this.reset();
            }
        },
        reset(){
            this.Nombre="";
            this.Precio=""
            this.Unidades=""
        }
    }
}
</script>

<style>

</style>