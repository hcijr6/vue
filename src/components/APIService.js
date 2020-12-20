import axios from 'axios';
const baseURL = 'http://localhost:3000';

export default {
  constructor(){
  },
  getTodos() {
    return axios.get(baseURL+'/productos')
  },

  delete(id){
    return axios.delete(baseURL+'/productos/'+id)
  },

  add(newProducto) {
    return axios.post(baseURL+'/productos', newProducto)
  },

  toogleDone(producto) {
    return axios.put(baseURL+'/productos/'+producto.id, {
        id: producto.id,
        name: producto.name,
        price: producto.price,
        units: producto.units
    })
  },
}