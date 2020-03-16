<template>

  <f7-page class="user-page safe-area" :style="{ backgroundImage: `url('${User.photo}')` }">

    <f7-navbar back-link="" large large-transparent></f7-navbar>

    <div class="user-page__main">

      <div class="user-page__main__name">
        <span>{{User.firstName}}</span><br>
        <span>{{User.lastName}}</span>
      </div>
      <div class="user-page__main__biography">
        <span>@{{User.domain}} • Актёр</span>
        <p>{{User.biography}}</p>
      </div>
      <div class="user-page__main__actions">
        <f7-button class="user-page__main__actions__call" raised actions-open="#actions-callback">Связаться</f7-button>
        <f7-button class="user-page__main__actions__services" raised actions-open="#actions-services">Доступные услуги</f7-button>


        <f7-actions class="actions" id="actions-callback">
          <f7-actions-group class="actions__group">

            <f7-actions-button class="actions__group-button" @click="BtnOne">
              <div class="actions__group-button-icon">
                <i class="f7-icons chat_bubble__icon">chat_bubble</i>
              </div>
              <div class="actions__group-button-text">
                <span>Сообщение</span>
                <span>Напишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon">
                <i class="f7-icons phone__icon">phone</i>
              </div>
              <div class="actions__group-button-text">
                <span>Аудио звонок</span>
                <span>Запишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon">
                <i class="f7-icons videocam__icon">videocam</i>
              </div>
              <div class="actions__group-button-text">
                <span>Видео звонок</span>
                <span>Запишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>

          </f7-actions-group>
          <f7-actions-group>
            <f7-actions-button>Отмена</f7-actions-button>
          </f7-actions-group>
        </f7-actions>

      </div>

    </div>

    <div class="user-page__information">

      <div class="user-page__information__title">
        <span class="user-page__information__title__text">Информация</span>
        <span class="user-page__information__title__menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="12" r="2" fill="#8C8CB6"/>
            <circle cx="17" cy="12" r="2" fill="#8C8CB6"/>
          </svg>
        </span>
      </div>

      <div class="user-page__information__socials">
        <i style="color: blue" class="f7-icons logo_facebook__icon">logo_facebook</i>
        <i style="color: #f3456d" class="f7-icons logo_instagram__icon">logo_instagram</i>
        <i style="color: #1e90ff" class="f7-icons logo_twitter__icon">logo_twitter</i>
        <i style="color: red" class="f7-icons play_rectangle_fill__icon">play_rectangle_fill</i>
      </div>

      <div class="user-page__information__statistics">
        <div class="user-page__information__statistics__block">
          <span>169k</span>
          <span>Подписчиков</span>
        </div>
        <div class="user-page__information__statistics__block">
          <span>3h</span>
          <span>Время ответа</span>
        </div>
        <div class="user-page__information__statistics__block">
          <span>4.3</span>
          <span>Рейтинг</span>
        </div>
        <div class="user-page__information__statistics__block">
          <span>icon</span>
          <span>Россия</span>
        </div>
      </div>

      <div class="user-page__information__answers">

        <div class="user-page__information__answers__title">
          <span class="user-page__information__answers__title-text">Ответы на запросы</span>
          <span class="user-page__information__answers__title-menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="12" r="2" fill="#8C8CB6"/>
            <circle cx="17" cy="12" r="2" fill="#8C8CB6"/>
          </svg>
        </span>
        </div>

        <div class="user-page__information__answers__wrapper">
          <div class="user-page__information__answers__wrapper-video" v-for="i in 6" :key="i"></div>
        </div>

      </div>

    </div>


  </f7-page>


</template>

<script>
     
    export default {

        name: '',

        data() {
            return {
                timeline: [],
                recomended: [1,2,4,8,16,32,64,128],
                is_show_more: false,
                cost: 0,
                isLoading: false,
                isUserDataLoading: false,
                is_followed: false,
                people: {
                    isOpen: false,
                    items: []
                },
                text: ''
            }
        },
        props: {
            User: {
                type: Object,
                default: () => { return {} }
            }
        },

        methods: {
          BtnOne() {
            console.log('нажали кнопку 1')
          },
          BtnTwo() {
            console.log('нажали кнопку 2')
          }
        }
        // methods: {
            
        //     getRecomm() {
                
        //         if(this.people.isOpen) {
        //             this.people.isOpen = false;
        //             return;
        //         }
                
                
        //         if(this.people.items.length > 0) {
        //             this.people.isOpen = true;
        //             return;
        //         }
                
        //         this.isLoading = true;
                
        //         request.get("/context/explore/industry/", {
        //             industry: this.User.industry.id
        //         }, (r) => {
        //            this.isLoading = false; 
        //            this.people.items = r.items;
        //            this.people.isOpen = true;
        //         }, (e) => {
        //             this.isLoading = false;
        //         });
                
                
        //     },
            
        //     contact() {
        //        if(!UserModel.checkAuthentication()) { 

        //             this.$f7router.navigate("/authorization-pop-up");

        //        } else if(!this.User.contact.is_price_set) {
        //             this.$refs.contact.open();
        //        } else {
                   
        //             if(this.User.dialog.is_exists) {
        //                 dialog.chat.active[this.User.dialog.id] = dialog.chat.init(this.User.dialog.id);
        //                 this.$f7.views.main.router.navigate("/chat" + this.User.dialog.id, {
        //                     props: {
        //                         listItem: {
        //                             peer: {
        //                                 id: this.User.id,
        //                                 name: `${this.User.firstName} ${this.User.lastName}`,
        //                                 image: this.User.photo,
        //                             }
        //                         }
        //                     }
        //                 });
        //             } else {
        //                 dialog.write(this.User.id, (r) => {
        //                     dialog.chat.active[r.dialog_id] = dialog.chat.init(r.dialog_id);
        //                     this.$f7.views.main.router.navigate("/chat" + r.dialog_id, {
        //                         props: {
        //                             listItem: {
        //                                 peer: {
        //                                     id: this.User.id,
        //                                     name: `${this.User.firstName} ${this.User.lastName}`,
        //                                     image: this.User.photo,
        //                                 }
        //                             }
        //                         }
        //                     });
        //                 });  
        //             }
                    
        //        }
        //     },
            
        //     getAvatarStyle() {
                
        //         return {};
                
        //         var r = this.User.rgb[0];
        //         var g = this.User.rgb[1];
        //         var b = this.User.rgb[2];
                
        //         return {
        //             "border" : `5px solid rgb(${r},${g},${b})`
        //         }
                
                
        //     },
            
        //     isShowSendBtn() {
        //         if(this.text.length === 0 || this.cost === 0) {
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     },
            
        //     getUserModelBiography() {
                
        //         if(!this.User.biography) {
        //             return '';
        //         }
                
        //         var len = this.User.biography.length;
                
        //         if(len > 155) {
        //             if(this.is_show_more) {
        //                 return this.$root.utils.textFormat(this.User.biography);
        //             } else {
        //                 return this.$root.utils.textFormat(this.User.biography.slice(0,155) + '...');
        //             }
        //         } 
                
        //         return this.$root.utils.textFormat(this.User.biography);

        //     },
            
        //     send() {
                
        //         if(!this.isShowSendBtn()) {
        //             return;
        //         }
                
        //         this.$f7.preloader.show();
                
        //          dialog.write(this.User.id, (r) => {
                  
        //             this.$refs.contact.close();
                  
        //             var chat = dialog.chat.init(r.dialog_id);
       
       
        //             chat.cost = this.cost;
        //             chat.text = this.text;
        //             chat.type = 'message';
                    
        //             try {
        //                 chat.send();
        //             } catch (err) {
        //                 console.log(err);
        //             }
                    
        //             this.$f7.preloader.hide();
                    
        //             this.$root.notify.success("");
       
        //         }); 

        //     },
            
        //     openMedia(media) {
        //         this.$f7router.navigate("/timeline/media/", {
        //           props: {
        //               mediaItems: this.timeline,
        //               initialIndex: media.id
        //           }  
        //         });
        //     },
            
        //     beforein() {
                
        //         this.isUserDataLoading = true;
                
        //         request.get("/user/get/", {
        //             id: this.User.id
        //         }, (r) => {
                    
        //             Object.keys(r).forEach((key) => {
        //                 if(r.hasOwnProperty(key)) {
        //                     this.User[key] = r[key];
        //                 }
        //             });
                    
        //             this.is_followed = this.User.is_followed;
        //             this.isUserDataLoading = false;
                    
        //         }, (e) => {
                    
        //             this.isUserDataLoading = false;
                    
        //         });
                
                
        //         request.get('/user/timeline/get/', {
        //             user_id: this.User.id
        //         }, (r) => {
        //             this.timeline = r.items;
        //             setTimeout(() => {
        //                 this.$f7.lazy.create(".user-page");
        //             }, 200);
        //         }, (e) => {
                    
        //         });
                
        //     }
        // },

        // mounted() {
                        
        //      this.beforein();
            
        // }
    }

</script>

<style lang="scss">
  .user-page {
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 700px;

      &__main {
        margin-top: 250px;
        padding: 0 30px 0 30px;

          &__name {
            span {
              color: #FFFFFF;
              font-size: 36px;
              line-height: 38px;
            }
          }

          &__biography {
            margin-top: 15px;

            span {
              color: #FFFFFF;
              font-size: 14px;
              line-height: 17px;
            }

            p {
              color: #FFFFFF;
              font-size: 14px;
              line-height: 17px;
              margin: 8px 0 0 0;
            }
          }

          &__actions {
            display: flex;
            margin-top: 25px;

            &__call {
              background: #615DFA;
              color: #FFFFFF;
              margin-right: 8px;
              width: 150px;
              height: 50px;
              text-transform: none;
              font-weight: 400;
              font-size: 14px;
              line-height: 50px;
              border: none;
              border-radius: 8px;
              text-align: center;
              vertical-align: middle
            }

            &__services {
              background: #FFD966;
              color: #4E3F6F;
              width: 152px;
              height: 48px;
              text-transform: none;
              font-weight: 400;
              font-size: 14px;
              line-height: 50px;
              border: none;
              border-radius: 8px;
            }
          }
      }

      &__information {
        margin-top: 25px;
        background: #F2F2FE;
        border-radius: 40px 40px 0px 0px;
        padding: 15px 0 0 0;
        min-height: 500px;
        position: relative;

          &__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 30px 0 30px;

            &__text {
              color: #4E3F6F;
              font-size: 18px;
              line-height: 21px;
            }

            &__menu {

            }
          }

          &__socials {
            margin: 15px 30px 0 30px;
          }

          &__statistics {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 30px 0 30px;

              &__block {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                  span:nth-child(1) {
                    color: #4E3F6F;
                    font-size: 20px;
                    line-height: 24px;
                    font-weight: 500;
                  }
                  span:nth-child(2) {
                    color: #8C8CB6;
                    font-size: 12px;
                    line-height: 14px;
                  }
              }
          }

          &__answers {
            margin-top: 30px;
            width: 100%;
            position: absolute;
            background: #FFFFFF;
            border-radius: 40px 40px 0px 0px;
            min-height: 100%;
            padding: 15px 0 50px 0;
            
              &__title {
                margin: 0 30px;
                display: flex;
                justify-content: space-between;

                &-text {
                  color: #4E3F6F;
                  font-size: 18px;
                  line-height: 21px;  
                }
                &-menu {

                }
              }

              &__wrapper {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: 100%;

                &-video:nth-child(2n) {
                  margin: 8px 30px 8px 8px
                }
                &-video:nth-child(2n+1) {
                  margin: 8px 8px 8px 30px
                }
                
                &-video {
                  width: calc(50% - 38px);
                  height: 200px;
                  background: grey;
                  border-radius: 20px;
                }
              }
          }
      }

  }

// ACTION SHEET BUTTONS STYLES

.actions {
  &__group {

    &-button {
      display: flex;
      height: 80px;

      .actions-button-text {
        display: flex;
        align-items: center;

        .actions__group-button-icon {
          width: 48px;
          height: 48px
        }

        .actions__group-button-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }

    }
  }
}
</style>
