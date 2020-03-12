import axios from 'axios'

export default {
    state: {
      country_list: null,
      location: null
    },

    mutations: {
      get_country_list(state, resp) {
        
      },

      get_location(state, resp) {
        
      }
    },

    actions: {
      GET_COUNTRY_LIST(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/database.get?", {
          fields: 'country'
        })
          .then( resp => {
            console.log(resp)
          })
          .catch( e => console.log(e) )
      },

      GET_LOCATION(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/database.get?", {
          fields: 'country'
        })
          .then( resp => {
            console.log(resp)
          })
          .catch( e => console.log(e) )
      }
    },

    getters: {
      getAllCountry(state) {
        return state.country_list
      },

      getLocation(state) {
        return state.location
      }
    }
}