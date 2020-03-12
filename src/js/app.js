import Vue from 'vue';
import Vuex from 'vuex';
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.css';
import '../css/icons.css';
import '../css/app.scss';
import App from '../components/app.vue';
import VueTheMask from 'vue-the-mask';
import VueFlex from '@seregpie/vueflex';
import MoneyFormat from 'vue-money-format';
import Framework7Keypad from 'framework7-plugin-keypad/dist/framework7-keypad.min.js';
import 'framework7-plugin-keypad/dist/framework7-keypad.min.css';
import VueBankCard from "@avto-dev/bank-card-vue-component"
import "@avto-dev/bank-card-vue-component/dist/bank-card-vue-component.css";
import VueApexCharts from 'vue-apexcharts';
import VueAnimated from '@codekraft-studio/vue-animated';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.min.css';

Vue.use(VueVideoPlayer);
Vue.use(VueAnimated);
Vue.use(VueApexCharts);

Framework7.use(Framework7Vue);
// Framework7.use(Framework7Keypad);

Vue.use(VueTheMask);
Vue.use(VueFlex);
Vue.use(Vuex);

Vue.component('MoneyFormat', MoneyFormat);
Vue.component("VueBankCard", VueBankCard);

import notify from "@/components/modules/notify/"

new Vue({
  el: '#app',
  render: (h) => h(App),
  data() {
    return {
      notify
    }
  },
  components: {
    app: App
  },
});