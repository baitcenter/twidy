import axios from 'axios'

export default {
    state: {
      lists: {
        app: null,
        income: [],
        outcome: []
      }
    },

    mutations: {

    },

    actions: {

    },

    getters: {
      getAwaitCount(state) {
        let count = 0;
        state.lists.income.forEach( item => item.status === -1 ? count++ : count);
        return count
      }
    }
}