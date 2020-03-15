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
