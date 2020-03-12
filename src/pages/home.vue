<template>
  <f7-page :page-content="false" tabs name="home"> 
    <f7-views tabs>

      <f7-toolbar id="main-toolbar" tabbar bottom>
    
          <f7-link  icon-only tab-link="#discover" tab-link-active icon-f7="house"  ></f7-link>
          
          <f7-link  icon-only tab-link="#chats" icon-f7="chat_bubble">
              <f7-badge v-if="dialogList.balance > 0" color="yellow" style="position: absolute; right: 5px; top: 0;">
                  {{ dialogList.balance }}$
              </f7-badge>
          </f7-link>

          <f7-link  icon-only tab-link="#calls" icon-f7="phone">
              <!-- <f7-badge v-if="call.lists.getAwaitCount() > 0" color="red" style="position: absolute; right: 15px; top: 0;">
                  {{ call.lists.getAwaitCount() }}
              </f7-badge> -->
          </f7-link>

          <f7-link  icon-only tab-link="#settings" icon-f7="gear" ></f7-link>
          
      </f7-toolbar>
      
      <f7-view :main="false" :stackPages="true" :iosAnimateNavbarBackIcon="false" :iosDynamicNavbar="false" :iosSwipeBackAnimateShadow="false" :iosSwipeBackAnimateOpacity="false" :masterDetailBreakpoint="450" id="discover" name="discover" tab tab-active url="/discover"></f7-view>
      <f7-view :main="false" :stackPages="true" :iosAnimateNavbarBackIcon="false" :iosDynamicNavbar="false" :iosSwipeBackAnimateShadow="false" :iosSwipeBackAnimateOpacity="false" :masterDetailBreakpoint="450" id="chats" name="chats" tab url="/chats"></f7-view>
      <f7-view :main="false" :stackPages="true" :iosAnimateNavbarBackIcon="false" :iosDynamicNavbar="false" :iosSwipeBackAnimateShadow="false" :iosSwipeBackAnimateOpacity="false" :masterDetailBreakpoint="450" id="calls"  name="search" tab url="/calls"></f7-view>
      <f7-view :main="false" :stackPages="true" :iosAnimateNavbarBackIcon="false" :iosDynamicNavbar="false" :iosSwipeBackAnimateShadow="false" :iosSwipeBackAnimateOpacity="false" :masterDetailBreakpoint="450" id="settings"  name="settings" tab url="/settings/"></f7-view>

    </f7-views>
  </f7-page>
</template>

<script>
    
  export default {
    name: '',

    computed: {
      dialogList() {
        return !this.$store.getters.getListData ? {} : this.$store.getters.getListData
      }
    }
  }

</script>