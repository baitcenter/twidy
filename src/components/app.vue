<template>
    <f7-app :params="f7params">       
        <f7-view main
          class="safe-areas"
          :stackPages="true" 
          :iosAnimateNavbarBackIcon="false"
          :masterDetailBreakpoint="450"
          :iosDynamicNavbar="false"
          :iosSwipeBackAnimateShadow="false"
          :iosSwipeBackAnimateOpacity="false"
          url='/'
        ></f7-view>     
    </f7-app>
</template>

<script>
import routes from '../js/routes.js'

export default {
  data() {
      return {
        f7params: {
          name: 'twidy', 
          theme: 'ios',
          iosTranslucentBars: true,
          data: function () {
            return {

            };
          },
          dialog: {
              buttonOk : 'ОК',
              buttonCancel : 'Отмена'
          },
          lazy: {
            threshold: 50,
            sequential: false,
          },
          navbar: {
              scrollTopOnTitleClick: false
          },
          searchbar: {
              'disable-button-text' : 'Отмена'
          },
          touch: {
                tapHold: true,
                disableContextMenu: true,
                fastClicks: true
          },
          routes: routes,
        },
      }
    }
}
</script>

<style>
  @font-face {
    font-family: 'San Francisco Pro Display Thin';
    src: url('../fonts/SFProDisplay-Thin.eot');
    src: url('../fonts/SFProDisplay-Thin.eot?#iefix') format('embedded-opentype'),
    url('../fonts/SFProDisplay-Thin.woff') format('woff'),
    url('../fonts/SFProDisplay-Thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
</style>