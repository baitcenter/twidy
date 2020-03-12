import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import dialogs from './modules/dialogs.js'
import call from './modules/call.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    dialogs,
    call
  }
})