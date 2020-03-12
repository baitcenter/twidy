import axios from 'axios'
import { $f7 } from 'framework7-vue'

export default {
    state: {
      country_list: null,
      location: null,
      auth_i: null
    },

    mutations: {
      get_country_list(state, resp) {
        state.country_list = resp
      },

      get_location(state, resp) {
        state.location = resp
      },

      get_auth(state, resp) {
        state.auth_i = resp
      }
    },

    actions: {
      GET_COUNTRY_LIST(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/database.get?fields=country")
          .then( resp => {
            ctx.commit('get_country_list', resp.data.result);
            return resp.data.result
          })
          .catch( e => console.log(e) )
      },

      GET_LOCATION(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/utils.getLocation?")
          .then( resp => {
            ctx.commit('get_location', resp.data.result.location);
            return resp.data.result.location
          })
          .catch( e => console.log(e) )
      },

      GET_AUTH(ctx, phone) {
        return axios.post('http://dev.twidy.ru/api/methods/auth?', phone)
          .then( (resp) => {
            ctx.commit('get_auth', resp.data.result)
          })
      },

      GET_AUTH_CONFIRM(ctx) {
        return axios.post('http://dev.twidy.ru/api/methods/auth.confirm?', params)
          .then( resp => console.log(resp))
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