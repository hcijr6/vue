import APIService from './APIService.js'
export const store = {
  state: {
    productos: []
  },
  getTodos() {
    this.state.productos.length=0;
    APIService.getTodos()
      .then(response=>
        response.data.forEach(todo=>this.state.productos.push(todo)))
      .catch(error=>console.error('Error: '+(error.statusText || error.message || error)))
  },
  delete(id) {
    APIService.delete(id)
      .then(()=>this.getTodos())
      .catch(error=>console.error('Error: '+(error.statusText || error.message || error)))
  },
  add(prod){
    APIService.add(prod)
      .then(()=>this.getTodos())
      .catch(error=>console.error('Error: '+(error.statusText || error.message || error)))
  }
}
