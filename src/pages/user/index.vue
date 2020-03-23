<template>

  <f7-page class="user-page safe-area" 
    :style="styleBackground"
  >

    <f7-navbar back-link="" large large-transparent></f7-navbar>

    <div class="user-page__main">

      <div class="user-page__main__name">
        <p>{{User.firstName}}</p>
        <p>{{User.lastName}}</p>
      </div>
      <div class="user-page__main__biography">
        <span>@{{User.domain}} • Актёр</span>
        <p v-html="User.biography"></p>
      </div>
      <div class="user-page__main__actions">
        <f7-button class="user-page__main__actions__call" raised actions-open="#actions-callback">Связаться</f7-button>
        <f7-button class="user-page__main__actions__services" raised actions-open="#actions-services">Доступные услуги</f7-button>


        <f7-actions class="actions" id="actions-callback">
          <f7-actions-group class="actions__group">

            <f7-actions-button class="actions__group-button" @click="BtnOne">
              <div class="actions__group-button-icon actions__group-button-icon__chat">
                <i class="f7-icons chat_bubble__icon actions__group-button-icon__i">chat_bubble</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Сообщение</span>
                <span class="actions__group-button-text__desc">Напишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon actions__group-button-icon__phone">
                <i class="f7-icons phone__icon actions__group-button-icon__i">phone</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Аудио звонок</span>
                <span class="actions__group-button-text__desc">Запишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon actions__group-button-icon__videocam">
                <i class="f7-icons videocam__icon actions__group-button-icon__i">videocam</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Видео звонок</span>
                <span class="actions__group-button-text__desc">Запишите сообщение {{User.firstName}}</span>
              </div>
            </f7-actions-button>

          </f7-actions-group>
          <f7-actions-group class="actions__group">
            <f7-actions-button class="actions__group-button__cancel">Отмена</f7-actions-button>
          </f7-actions-group>
        </f7-actions>

        <f7-actions class="actions" id="actions-services">
          <f7-actions-group class="actions__group">

            <f7-actions-button class="actions__group-button" @click="BtnOne">
              <div class="actions__group-button-icon actions__group-button-icon__videocam">
                <i class="f7-icons videocam__icon actions__group-button-icon__i">videocam</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Запрос видео ответа</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon actions__group-button-icon__phone">
                <i class="f7-icons camera__icon actions__group-button-icon__i">camera</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Запрос фото ответа</span>
              </div>
            </f7-actions-button>
            <f7-actions-button class="actions__group-button" @click="BtnTwo">
              <div class="actions__group-button-icon actions__group-button-icon__mic">
                <i class="f7-icons mic__icon actions__group-button-icon__i">mic</i>
              </div>
              <div class="actions__group-button-text">
                <span class="actions__group-button-text__title">Запрос аудио ответа</span>
              </div>
            </f7-actions-button>

          </f7-actions-group>
          <f7-actions-group class="actions__group">
            <f7-actions-button class="actions__group-button__cancel">Отмена</f7-actions-button>
          </f7-actions-group>
        </f7-actions>

      </div>

    </div>

    <div class="user-page__information">

      <div class="user-page__information__title">
        <span class="user-page__information__title__text">Информация</span>
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
        </div>

        <div class="user-page__information__answers__wrapper">
          <div class="user-page__information__answers__wrapper-video" v-for="i in 8" :key="i"></div>
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
            text: '',
            styleBackground: {
              backgroundImage: `linear-gradient(0deg, rgba(78, 63, 111, 0.22), rgba(78, 63, 111, 0.22)),
              linear-gradient(360deg, #110035 11.41%, rgba(20, 0, 64, 0) 49.1%), 
              linear-gradient(180deg, #140040 -9.67%, rgba(20, 0, 64, 0) 11.99%), 
              url('${this.User.photo}')`,

            }
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
        },

        mounted() {
          this.$store.dispatch('GET_USER', this.User.id)
        }
    }

</script>

<style lang="scss">
  .user-page {
    height: 100%;
    background-repeat: repeat-y;
    background-size: 100% 400px;

      &__main {
        margin-top: 0;
        padding: 0 30px 0 30px;

          &__name {
            p {
              color: #FFFFFF;
              font-size: 25px;
              line-height: 38px;
              font-weight: 500;
              margin: 0 0 0.01em 0;
            }
          }

          &__biography {
            margin-top: 5px;

            span {
              color: #FFFFFF;
              font-size: 13px;
              line-height: 17px;
              font-weight: 500;
            }

            p {
              color: #FFFFFF;
              font-size: 13px;
              line-height: 17px;
              font-weight: 500;
              margin: 8px 0 0 0;
            }
          }

          &__actions {
            display: flex;
            margin-top: 20px;

            &__call {
              background: #615DFA;
              color: #FFFFFF;
              margin-right: 8px;
              width: 150px;
              height: 48px;
              text-transform: none;
              font-weight: 400;
              font-size: 14px;
              line-height: 50px;
              border: none;
              border-radius: 8px;
              box-shadow: none
            }

            &__services {
              background: #FFD966;
              color: #4E3F6F;
              margin-left: 8px;
              width: 150px;
              height: 48px;
              text-transform: none;
              font-weight: 400;
              font-size: 14px;
              line-height: 50px;
              border: none;
              border-radius: 8px;
              box-shadow: none
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
    display: flex;
    flex-direction: column;
    align-items: center;

    &-button {
      display: flex;
      height: 80px;
      max-width: 312px;
      background: white;

      &:hover {
        background: #F2F2FE;
      }

      .actions-button-text {
        display: flex;
        align-items: center;
        background: white;

        .actions__group-button-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 16px;

          &__chat {
            background: #8378F8;
          }

          &__phone {
            background: #FF7AE9;
          }

          &__videocam {
            background: #6BB1F9;
          }

          &__mic {
            background: #8378F8;
          }

            .actions__group-button-icon__i {
              color: white;
              font-size: 18px;
            }
        }

        .actions__group-button-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;

          .actions__group-button-text__title {
            color: #4E3F6F;
            font-size: 20px;
            line-height: 24px;
          }

          .actions__group-button-text__desc {
            margin-top: 5px;
            font-size: 14px;
            line-height: 17px;
            color: #8C8CB6;
          }
        }
      }

    }

    .actions__group-button__cancel {
      max-width: 312px;
      background: white;
      font-size: 18px;
      line-height: 21px;
      color: #4E3F6F;
      display: flex;
      align-items: center;
    }

  }
}
</style>
