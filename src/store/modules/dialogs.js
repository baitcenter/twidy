import axios from 'axios'

export default {
    state: {
      list: {
        total_unseen_count: 0,
        balance: 0,
        is_updating: false,
        count: 0,
        items: [],
        widget: { items: [] }
      }
    },

    mutations: {

    },

    actions: {

    },

    getters: {
      getListData(state) {
        return state.list
      }
    }
}