import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import dialogs from './modules/dialogs.js'
import call from './modules/call.js'
import category from './modules/category.js'
import recommendation from './modules/recommendation.js'
import cache from './modules/cache.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    dialogs,
    call,
    category,
    recommendation,
    cache,
    user
  }
})