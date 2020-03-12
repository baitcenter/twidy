import axios from 'axios'

export default {
    state: {

    },

    mutations: {

    },

    actions: {
      SET_ITEM(ctx, {key, value}) {
        if(typeof value === 'object') {
          value = JSON.stringify(value)
        }

        localStorage.setItem(key, value)
      }
    },

    getters: {
      getItem(state) {
        let response = localStorage.getItem(key)
        
        return response ? JSON.parse(response) : false
      }
    }
}