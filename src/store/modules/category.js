import axios from 'axios'

export default {
    state: {
      categorys: null
    },

    mutations: {
      get_categorys(state, resp) {
        state.categorys = resp.industry
      }
    },

    actions: {
      GET_CATEGORYS(ctx) {
        return axios.get('http://dev.twidy.ru/api/methods/database.get?fields=industry')
          .then( resp => {
            ctx.commit('get_categorys', resp.data.result)
          })
          .catch( e => console.log(e) )
      }
    },

    getters: {
      getCategorys(state) {
        return state.categorys
      }
    }
}