import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cards: []
    
  },
  mutations: {
    SET_CARDS(state, cards) {
        state.cards = cards
        }
  },
  actions: {
    getCards({ commit }) {
        axios.get('http://5d63ff9926046800144d71fa.mockapi.io/cards')
        .then(response => {
        commit('SET_CARDS', response.data)
        })
        }
  },
  getters :{
    allCards: (state) => state.cards

  }
})

