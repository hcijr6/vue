<template>
<div class="d-flex flex-column justify-content-center align-items-center">
    <div class="card">
        <div class=" card-header"> <h4>Nuevo producto</h4> </div>
        <div class=" card-body">
                <div v-if="id">
                    <label>Id:</label>
                    <input type="number" v-model="producto.id" min="0" disabled>
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
                <button @click="add" class="btn btn-default btn-primary">{{ producto.id?'Editar':'Añadir'}}</button>
                <button @click="reset" class="btn btn-secondary">Reset</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:['id'],
    data() {
        return {
            producto:{},
            boton:"",
        }
    },
    methods: {
        add(){
            if(!this.id){
                this.$store.dispatch('addItem', this.producto)
                .then(() => {
                    alert('El producto se ha añadido correctamente')
                    this.$router.push('/')
                })
                .catch((err) => alert('Error: '+err.message || err))
            }
            else{
                this.$store.dispatch('editItem', this.producto)
                .then(() => {
                    alert('El producto se ha editado correctamente')
                    this.$router.push('/')
                })
                .catch((err) => alert('Error: '+err.message || err))
            }
        },
        reset(){
            this.producto={};
        },
    },
    mounted(){
        if(this.id){
            this.$store.dispatch('findItem',this.id)
        .then(response=> this.producto=response)
        .catch(error=>alert('Error: '+(error.statusText || error.message || error)))
        }
    }
}

</script>

<style>

</style>