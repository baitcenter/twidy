import axios from 'axios'

export default {
    state: {
      explore: {
        industry:  [],
        channels: [],
        people: [],
        same: [],
        funds: [],
        hashtags: [],
      }
    },

    mutations: {

    },

    actions: {
      SET_ITEM(ctx, {key, value}) {
        if(typeof value === 'object') {
          value = JSON.stringify(value)
        }

        localStorage.setItem(key, value)
      },

      getData(ctx) {
        return axios.get('http://dev.twidy.ru/api/methods/explore?')
          .then( resp => {
            console.log(resp.data.result)
          })
      }
    },

    getters: {
      getExploreData(state) {
        return state.explore
      },

      getCacheItem(state) {
        let response = localStorage.getItem(key);
        
        return response ? JSON.parse(response) : false
      }
    }
}