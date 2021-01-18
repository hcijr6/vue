import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
const URL = 'http://localhost:3000/productos';
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
     productos: [],
     loading: true,
  },
  actions: {
    findItem({commit}, id) {
        return new Promise((resolve, reject) => {
          commit('changeLoadingState', true);
          axios.get(URL+'/'+id)
          .then((response) => {
            commit('changeLoadingState', false);
            resolve(response.data);})
          .catch(err => reject(err))
        });
    },
    delItem({commit}, id) {
        return new Promise((resolve, reject) => {
          commit('changeLoadingState', true);
          axios.delete(URL+'/'+id)
          .then((response) => {
            commit('delProd', id)
            commit('changeLoadingState', false);
            resolve(response.data);})
          .catch(err => reject(err))
        });
    },
    loadData({commit}) {
      axios.get(URL).then((response) => {
      commit('getProds', response.data)
      commit('changeLoadingState', false)
      })
    },
    addItem({commit}, item) {
        return new Promise((resolve, reject) => {
          commit('changeLoadingState', true);
          axios.post(URL, item)
          .then((response) => {
            commit('addProd', response.data);
            commit('changeLoadingState', false);
            resolve(response.data);})
          .catch(err => reject(err))
        });
    },
    editItem({commit}, item) {
        return new Promise((resolve, reject) => {
          commit('changeLoadingState', true);
          axios.put(URL+'/'+item.id, item)
          .then((response) => {
            commit('editProd', response.data);
            commit('changeLoadingState', false);
            resolve(response.data);})
          .catch(err => reject(err))
        });
    },  
},
mutations: {
  getProds(state, prods) {
    state.productos = prods
  },
  addProd(state, prod) {
    state.productos.push(prod)
  },
  editProd(state, prod){
    state.productos = state.productos.map(function(x) { if(x.id === prod.id){return prod}});  
  },
  delProd(state, id){
    state.productos = state.productos.filter(function(x) { if(x.id !== id){return x}})
  },
  changeLoadingState(state, loading) {
      state.loading = loading
  },
}
})
export default store;