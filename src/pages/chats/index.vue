<template>
    <f7-page class="chats-page" name="chats">
        <f7-navbar class="chats-navbar" ref="chatsbar" no-hairline no-shadow large large-transparent  >

            <f7-nav-left>
              <f7-link :text=" is_edit ? `Готово` : `Изм.`" ></f7-link>
            </f7-nav-left>
            
            <f7-nav-title title="Чаты"></f7-nav-title>
            
            <f7-nav-right>
              <f7-link icon-f7="square_pencil" icon-size="24" icon-only />
            </f7-nav-right>
        
            
        </f7-navbar>

        <div class="chats-content">

          <f7-searchbar
            no-hairline
            no-shadow
            ref="searchbar"
            placeholder='Поиск чатов'
            class="searchbar-chats"
            disable-button-text="Отмена"
            search-container=".dialogs-lists"
          ></f7-searchbar>

          <f7-list media-list no-hairlines class="dialogs-lists">
            
            <f7-list-item
                v-for="item in 10"
                :key="item"
                media-item
                name='dialogs'
                view=".view-main"
                :no-chevron="true"
                :swipeout="!is_edit"
                :checkbox="is_edit"
                class="dialogs-lists__item"
             >
             
                <f7-swipeout-actions v-if="!is_edit" right>
                  <f7-swipeout-button close delete> 
                    <p>Архивировать</p>
                  </f7-swipeout-button>
                </f7-swipeout-actions>
             
                  
                <div class="dialogs-lists__item-avatar" slot="media">
                  <img slot="media" src="static/chat.png">
                </div> 
                 
                <span class="dialogs-lists__item-title" slot="title">Кристапсас Дончич</span>
                <div class="dialogs-lists__item-text" slot="text"> 
                    <span > 
                      Вы:
                    </span> 
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
      
                <span class="dialogs-lists__item-badge pull-right" slot="inner-end">
                    
                </span>

            </f7-list-item>
            
        </f7-list>

        </div>
        
        
        <!-- <f7-toolbar id='edit-dialogs-toolbar' position="bottom" :hidden="true" bottom-md>
         
            <f7-link :disabled="selected.length === 0"> 
                <f7-badge v-if="selected.length > 0" color="twidy" style="margin-right: 5px"> {{ selected.length }} </f7-badge>
                В архив 
            </f7-link>
            
        </f7-toolbar> -->
        
        
        <!-- <f7-popup ref="write" push swipe-to-close >
            <f7-page :page-content="false" with-subnavbar>
                <f7-navbar no-hairline no-shadow ref="contactsbar">
                    
                    <f7-nav-title>
                        Новый чат
                    </f7-nav-title>
                    <f7-nav-right>
                        <f7-link>Отмена</f7-link>
                    </f7-nav-right>
                    
                    <f7-subnavbar :inner="false">
                      <f7-searchbar
                            no-hairline
                            no-shadow
                            placeholder='Поиск контактов'
                            class="searchbar-chats"
                            disable-button-text="Отмена"
                            @searchbar:enable="$refs.contactsbar.hide()"
                            @searchbar:disable="$refs.contactsbar.show()"
                            search-container=".dialogs-contact-list"
                        ></f7-searchbar>
                    </f7-subnavbar>
                    
                </f7-navbar>
                <div id="write-page-content" class="page-content">
                    <f7-list class="dialogs-contact-list" contact-list>
                        <f7-list-group v-for="item in User.followers.listOf">
                            <f7-list-item :title="item.group" group-title></f7-list-item>
                                <f7-list-item v-for="child in item.children" media-item link no-chevron>
                                    <div slot="media" class="avatar avatar-lg">
                                        <img :src="child.photo" />
                                    </div>
                                    <div slot="title">
                                        {{ child.firstName }} {{ child.lastName }}
                                    </div>
                                    <div v-if="child.biography" slot="text">
                                         {{ child.biography }}
                                    </div>
                                </f7-list-item>
                        </f7-list-group>
                    </f7-list>
                </div>
            </f7-page>
        </f7-popup> -->
        
    </f7-page>
</template>

<script>

  export default {

    name: '',

    data() {
        return {
          is_dialog_loading: false,
          selected: [],
          is_edit: false,
          is_search: false,
        }
    }
  }

</script>

<style lang="scss">
  .chats-page {
    background: #F2F2FE;
   
      .chats-navbar {
        padding: 0 30px ;
      }

      .chats-content {
        background: #FFFFFF;
        border-radius: 40px 40px 0px 0px;
        min-height: 100%;
        padding: 25px 30px  ;

          .searchbar-chats {
            top: 0;
          }

          .dialogs-lists {
            margin-top: 20px;

              .dialogs-lists__item {
                height: 80px;

                .swipeout-content {
                  height: 80px;

                  .item-content {
                    height: 80px;
                    padding: 0;

                    .item-media {
                      padding: 0;
                    }
                    .item-inner {
                      margin: 0;
                      padding: 0;
                    }
                  }
                }
              }
          }
      }
  }
</style>