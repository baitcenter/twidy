import axios from 'axios'

export default {
    state: {
      country_list: null,
      location: null,
      auth_i: null,
      auth_confirm: null
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
      },

      get_auth_confirm(state, resp) {
        state.auth_confirm = resp
      }
    },

    actions: {
      GET_COUNTRY_LIST(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/database.get?fields=country")
          .then( resp => {
            ctx.commit('get_country_list', resp.data.result.country);
          })
          .catch( e => console.log(e) )
      },

      GET_LOCATION(ctx) {
        return axios.get("http://dev.twidy.ru/api/methods/utils.getLocation?")
          .then( resp => {
            ctx.commit('get_location', resp.data.result.location);
          })
          .catch( e => console.log(e) )
      },

      GET_AUTH(ctx, phone) {
        return axios.post('http://dev.twidy.ru/api/methods/auth?', phone)
          .then( resp => {
            ctx.commit('get_auth', resp.data.result)
          })
          .catch( e => console.log(e) )
      },

      GET_AUTH_CONFIRM(ctx, params) {
        return axios.post('http://dev.twidy.ru/api/methods/auth.confirm?', params)
          .then( resp => {
            console.log(resp)
            ctx.commit('get_auth_confirm', resp);
            
            // localStorage.setItem("access_token", )
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
      },

      getAuthI(state) {
        return state.auth_i
      }
    }
}