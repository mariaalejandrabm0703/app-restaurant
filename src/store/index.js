import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [],
    buyers: [],
    buyerDetails: {}
  },
  mutations: {
    updateTransactions: (state, data) => { state.transactions = data; },
    updateBuyers: (state, data) => { state.buyers = data; },
    updateBuyerDetail: (state, data) => { state.buyerDetail = data; },
  },
  actions: {
    saveTransactions({ commit }, transactions) {
      commit('updateTransactions', transactions)
    },
    saveBuyers({ commit }, buyers) {
      commit('updateBuyers', buyers)
    },
    saveBuyersDetail({ commit }, buyersDetail) {
      commit('updateBuyerDetail', buyersDetail)
    },
  },
  modules: {
  }
})
