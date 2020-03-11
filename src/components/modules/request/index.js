import axios from 'axios'

export default {
  HOST: `http://dev.twidy.ru/api/methods/`,

  get(METHOD_NAME, PARAMETERS) {
    return axios.get({
      url: `${this.HOST}+${METHOD_NAME}+?`,
      data: PARAMETERS
    })
  },

  post(METHOD_NAME, PARAMETERS) {
    return axios.post({
      url: `${this.HOST}+${METHOD_NAME}+?`,
      data: PARAMETERS
    })
  }
}