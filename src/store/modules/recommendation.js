import axios from 'axios'

export default {
    state: {
      people: null,
      peopleItems: null,
      next_max_id: null,
      hashtags: null
    },

    mutations: {
      get_explore(state, resp) {
        state.people = resp.people;
        state.peopleItems = resp.people.items;
        state.next_max_id = resp.people.next_max_id;
        state.hashtags = resp.hashtags;
      },

      get_explore_next(state, resp) {
        resp.people.items.forEach( item => {
          state.peopleItems.push(item)
        })
        state.next_max_id = resp.people.next_max_id;
      }
    },

    actions: {
      SET_ITEM(ctx, {key, value}) {
        if(typeof value === 'object') {
          value = JSON.stringify(value)
        }

        localStorage.setItem(key, value)
      },

      GET_EXPLORE(ctx) {
        return axios.get('http://dev.twidy.ru/api/methods/explore?')
          .then( resp => {
            ctx.commit('get_explore', resp.data.result)
          })
      },

      GET_EXPLORE_NEXT(ctx, id) {
        return axios.get(`http://dev.twidy.ru/api/methods/explore.next?next_max_id=${id}`)
          .then( resp => {
            ctx.commit('get_explore_next', resp.data.result)
          })
      }
    },


    getters: {
      getPeopleData(state) {
        return state.people
      },

      getPeopleItems(state) {
        return state.peopleItems
      },

      getHashtags(state) {
        return state.hashtags
      },

      getNextMaxId(state) {
        return state.next_max_id
      },

      getCacheItem(state) {
        let response = localStorage.getItem(key);
        
        return response ? JSON.parse(response) : false
      }
    }
}