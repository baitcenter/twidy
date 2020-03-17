import axios from 'axios'

export default {
    state: {
      user: null
    },

    mutations: {
      get_user(state, resp) {
        state.user = resp
      }
    },

    actions: {
      GET_USER(ctx, id) {
        axios.get(`http://dev.twidy.ru/api/methods/user.get?id=${id}`)
          .then( resp => {
            ctx.commit('get_user', resp.data.result.user)
          })
      }
    },

    getters: {
      getUser(state) {
        return state.user
      }
    }
}