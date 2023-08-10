/* eslint-disable */
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      items: [],
      page: 1,
      total: null
    }
  },
  mutations: {
    addItems (state, value) {
        // console.log(value)
        value.forEach((item) => { state.items.push(item) })
        // state.items = value;
    },
    upgradePage (state, value) {
      state.page = value.current
      state.total = value.total
    },
  },
  actions: {
    getCards({commit, state}, page) {
        fetch(`http://flems.github.io/test/api/news/${page}`).then((response) => {
            response.json().then(json => {
                console.log(json)
                commit('addItems', json.items)
                commit('upgradePage', json.nav)
            })
        })
    }
  }
})

export default store

