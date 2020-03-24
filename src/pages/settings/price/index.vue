<template>
  <f7-page class="price-page safe-area">

    <div class="nav__bar">
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link back">
                      <i class="icon icon-back"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="nav__bar__title"><p>Стоимость контакта</p></div>
    </div>

    <div class="price-page__content">

      <f7-button @click="test(contact.id)" class="price-page__content__action" popup-open=".popup-change-contact" v-for="contact in contacts" :key="contact.id">
        <div class="price-page__content__action__container">
          <div :class="['price-page__content__action__container__icon', contact.icon]">
            <i class="f7-icons actions__group-button-icon__i">{{contact.icon}}</i>
          </div>
          <div class="price-page__content__action__container__text">
            <p>Стоимость</p>
            <p>{{contact.text}}</p>
          </div>
          <div class="price-page__content__action__container__price">
            <p class="price-page__content__action__container__price__number">{{contact.price}}$</p>
            <p class="price-page__content__action__container__price__change">Изменить</p>
          </div>
        </div>
      </f7-button>

      <f7-popup class="popup-change-contact" swipe-to-close swipe-handler=".swipe-handler">
        <f7-page>
            <div class="change-contact__popup__content">
                <div class="swipe-handler">
                    <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div class="change-contact__popup__content__form">
                  <div data-pagination='{"el": ".swiper-pagination"}'
                    data-space-between="0"
                    data-slides-per-view="1"
                    data-centered-slides="true"
                    class="contact-slider swiper-container swiper-init demo-swiper demo-swiper-auto"
                  >
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" v-for="item in contacts" :key="item.id" ref="slides">
                        <div class="swiper-slide__title">
                          <span>Стоимость {{item.text}}</span>
                        </div>
                        <div class="swiper-slide__input">
                          <input v-model="priceValue" type="text" placeholder="Укажите стоимость Вашего ответа">
                        </div>
                        <p class="swiper-slide__select-title">Или выберите рекомендованную</p>
                        <div class="swiper-slide__select">
                          <div :class="price.value === priceValue ? 'selectedPrice' : '' " @click="selectedPrice(price.value)" v-for='price in prices' :key="price.value"><span>{{price.value}}</span></div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination contact-pagination"></div>
                  </div>
                </div>
            </div>
        </f7-page>
      </f7-popup> 
      
      <div class="price-page__content__services">

        <f7-block-title class="price-page__content__services__title">
          <span>Услуги и запросы</span>
        </f7-block-title>

        <div class="price-page__content__services__list">
          <div class="price-page__content__services__list__item">
            <div class="price-page__content__services__list__item__title">
              <span>Запрос на Фото ответ</span>
              <label class="toggle">
                <input type="checkbox">
                <span class="toggle-icon"></span>
              </label>
            </div>
            <div class="price-page__content__services__list__item__desc">
              <p>Укажите стоимость и опишите Запрос</p>
            </div>
          </div>
          <div class="price-page__content__services__list__item">
            <div class="price-page__content__services__list__item__title">
              <span>Запрос на Видео ответ</span>
              <label class="toggle">
                <input type="checkbox">
                <span class="toggle-icon"></span>
              </label>
            </div>
            <div class="price-page__content__services__list__item__desc">
              <p>Укажите стоимость и опишите Запрос</p>
            </div>
          </div>
          <div class="price-page__content__services__list__item">
            <div class="price-page__content__services__list__item__title">
              <span>Запрос на Аудио ответ</span>
              <label class="toggle">
                <input type="checkbox">
                <span class="toggle-icon"></span>
              </label>
            </div>
            <div class="price-page__content__services__list__item__desc">
              <p>Укажите стоимость и опишите Запрос</p>
            </div>
          </div>
        </div>

        <div class="price-page__content__services__new-contact">
          <f7-button class="price-page__content__services__new-contact-btn" popup-open=".popup-new-contact">
            <p>Добавить услугу</p>
            <i class="f7-icons">chevron_right</i>
          </f7-button>
          <p class="price-page__content__services__new-contact__desc">Вы можете добавлять услуги, которые пользователи смогут у Вас заказать, <span style="color: blue">например: написание курсовой работы по математике.</span></p>
        </div>

        <f7-popup class="popup-new-contact" swipe-to-close swipe-handler=".swipe-handler">
          <f7-page>
              <div class="new-contact__popup__contact">
                  <div class="swipe-handler">
                      <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>
              </div>
          </f7-page>
        </f7-popup> 

      </div>
      
    </div>

  </f7-page>
</template>

<script>

  export default {
    name: '',

    data () {
      return {
        contacts: [
          {id: 0, icon: 'chat_bubble', text: 'сообщения', price: 2},
          {id: 1, icon: 'phone', text: 'аудио звонка', price: 0},
          {id: 2, icon: 'videocam', text: 'видео звонка', price: 500},
        ],
        prices: [
          {value: '5$'},
          {value: '10$'},
          {value: '15$'},
          {value: '20$'},
          {value: '50$'},
          {value: '60$'},
          {value: '80$'},
          {value: '100$'},
        ],
        priceValue: null
      }
    },

    methods: {
      test(id) {
        console.log(id)
      },

      selectedPrice(price) {
        console.log(price.replace(/\D/g,'')) //  .replace(/\D/g,'') delete all non-number symbols

        this.priceValue = price
      }
    },

    mounted() {
        console.log(this.$refs.slides)
    }
  }

</script>

<style lang="scss">
  .price-page {
    background: #F2F2FE;
    .nav__bar {
      display: flex;
      align-items: center;

      .navbar {
        width: 10%;
          .navbar-inner {
            margin-left: 10px;
            .left {
              a {
                i {
                  color: #8C8CB6
                }
              }
            }
          }
      }

      &__title {
        width: 90%;
        display: flex;
        justify-content: center;
        margin-right: 20px;

          p {font-size: 18px; line-height: 21px; color: #4E3F6F;}
      }
    }

    &__content {
      margin-top: 15px;

      &__action {
            background: #F2F2FE;
            height: 80px;
            margin-top: 10px;
            padding: 0;
            box-shadow: 0px 3px 8px -1px rgba(0,0,0,0.1);

              &__container {
                height: 100%;
                display: flex;
                align-items: center;
                padding: 0 30px;

                  &__icon {
                    border-radius: 16px;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                      i {color: white; font-size: 17px;}
                  }
                  .chat_bubble {background: #615DFA;}
                  .phone {background: #FF7AE9;}
                  .videocam {background: #6BB1F9;}

                  &__text {
                    margin-left: 15px;
                    word-wrap: break-word;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                      p {
                        margin: 0;
                        font-size: 18px;
                        line-height: 21px;
                        font-weight: 400;
                        text-transform: none;
                        color: #4E3F6F;
                      }
                  }

                  &__price {
                    margin-left: auto;
                    text-align: right;

                    p {margin: 0;}

                    &__number {
                      font-size: 20px;
                      line-height: 24px;
                      color: #4E3F6F;
                      text-transform: none;
                    }
                    &__change{
                      color: #615DFA;
                      font-size: 14px;
                      line-height: 17px;
                      font-weight: 400;
                      text-transform: none;
                    }
                  }
              }
          }
      
      &__services {
        min-height: 100%;
        background: #FFFFFF;
        margin-top: 60px;
        border-radius: 40px 40px 0px 0px;
        padding: 25px 32px;

          &__title {
            margin: 0;

            span {
              font-weight: 500;
              font-size: 18px;
              line-height: 21px;
              color: #4E3F6F;
            }
          }

          &__list {
            margin-top: 32px;

              &__item {
                margin-top: 15px;
                border-radius: 10px;
                background: rgba(140, 140, 182, 0.2);
                padding: 20px 15px 15px 15px;

                  &__title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    span {
                      font-size: 18px;
                      line-height: 21px;
                      color: #4E3F6F;
                    }
                  }

                  &__desc {
                    p {
                      font-size: 13px;
                      line-height: 16px;
                      color: #8C8CB6;
                      margin: 5px 0 0 0;
                    }
                  }
              }
          }

          &__new-contact {
            margin-top: 32px;

            &-btn {
              background: #615DFA;
              border-radius: 8px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 56px;
              padding: 0 16px;

              p {
                font-size: 18px;
                line-height: 21px;
                color: #FFFFFF;
                margin: 0;
                text-transform: none;
                font-weight: 400;
              }
              i {
                font-size: 16px;
                color: white;
              }
            }

            &__desc {
              margin: 10px 16px;
              font-size: 13px;
              line-height: 16px;
              letter-spacing: -0.02em;
              color: #8C8CB6;
            }
          }
      }
    }
  }

  .popup-change-contact {
    top: auto;
    max-height: 50%;
    bottom: 0;
    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;

      .page {
        background: white;

          .change-contact__popup__content {
              height: 100%;

              .swipe-handler {
                  padding: 17px 0;
                  display: flex;
                  justify-content: center
              }

              &__form {
                margin-top: 30px;
                padding: 0 32px;
                height: 80%;

                .contact-slider {
                  height: 100%;

                  .swiper-wrapper {
                    
                    .swiper-slide {

                      &__title {
                        span {
                          font-size: 18px;
                          font-weight: 500;
                          line-height: 21px;
                          color: #4E3F6F;
                        }
                      }

                      &__input {
                        margin-top: 35px;

                        input {
                          width: calc(100% - 15px);
                          border-bottom: 1px solid #8C8CB6;
                          font-size: 18px; line-height: 21px; color: #615DFA;
                          padding-bottom: 10px;

                          &::placeholder {font-size: 16px; line-height: 21px; color: #8C8CB6;}
                        }
                      }

                      &__select-title {
                        font-size: 18px;
                        line-height: 21px;
                        color: #4E3F6F;
                      }

                      &__select {
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;

                        div {
                          border: 1px solid #8C8CB6;
                          border-radius: 11px;
                          width: calc(25% - 10px);
                          height: 40px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          margin-right: 5px;
                          margin-top: 10px;

                          span {
                            font-size: 18px;
                            line-height: 21px;
                            color: #8C8CB6;
                          }
                        }
                      }
                    }
                  }

                  .contact-pagination {
                      span[class="swiper-pagination-bullet swiper-pagination-bullet-active"] {
                        background: #615DFA;
                        width: 20px;
                      }
                    }
                }
              }
          }
      }
  }

  .selectedPrice {
    background: #615DFA;
    
      span {
        color: #FFFFFF!important;
      }
  }
</style>