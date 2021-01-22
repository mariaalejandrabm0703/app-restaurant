import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    transactions: [],
    buyers: [],
    buyerDetails: {},
    isLoading: false
  },
  mutations: {
    updateTransactions: (state, data) => { state.transactions = data; },
    updateBuyers: (state, data) => { state.buyers = data; },
    updateBuyerDetail: (state, data) => { state.buyerDetails = data; },
    updateLoading: (state) => { state.isLoading = !state.isLoading; }
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
    showLoading({ commit }) {
      commit('updateLoading')
    }
  },
  modules: {
  }
})
