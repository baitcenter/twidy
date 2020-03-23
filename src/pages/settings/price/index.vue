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

      <f7-button class="price-page__content__action" popup-open=".demo-popup-swipe-handler">
          <div class="price-page__content__action__container">
            <div class="price-page__content__action__container__icon-chat">
              <i class="f7-icons chat_bubble__icon actions__group-button-icon__i">chat_bubble</i>
            </div>
            <div class="price-page__content__action__container__text">
              <p>Стоимость</p>
              <p>сообщения</p>
            </div>
            <div class="price-page__content__action__container__price">
              <p class="price-page__content__action__container__price__number">2$</p>
              <p class="price-page__content__action__container__price__change">Изменить</p>
            </div>
          </div>
        </f7-button>

        <f7-button class="price-page__content__action" popup-open=".demo-popup-swipe-handler">
          <div class="price-page__content__action__container">
            <div class="price-page__content__action__container__icon-phone">
              <i class="f7-icons phone__icon actions__group-button-icon__i">phone</i>
            </div>
            <div class="price-page__content__action__container__text">
              <p>Стоимость</p>
              <p>аудио звонка</p>
            </div>
            <div class="price-page__content__action__container__price">
              <p class="price-page__content__action__container__price__number">0$</p>
              <p class="price-page__content__action__container__price__change">Указать</p>
            </div>
          </div>
        </f7-button>
        
        <f7-button class="price-page__content__action" popup-open=".demo-popup-swipe-handler">
          <div class="price-page__content__action__container">
            <div class="price-page__content__action__container__icon-cam">
              <i class="f7-icons videocam__icon actions__group-button-icon__i">videocam</i>
            </div>
            <div class="price-page__content__action__container__text">
              <p>Стоимость</p>
              <p>видео звонка</p>
            </div>
            <div class="price-page__content__action__container__price">
              <p class="price-page__content__action__container__price__number">500$</p>
              <p class="price-page__content__action__container__price__change">Изменить</p>
            </div>
          </div>
        </f7-button>
      
      
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

      </div>
      
    </div>

  </f7-page>
</template>

<script>

    export default {
        name: '',

    }

</script>

<style lang="scss" scoped>
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

                  &__icon-chat {
                    background: #615DFA;
                    border-radius: 16px;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                      i {color: white; font-size: 16px;}
                  }
                  &__icon-phone {
                    background: #FF7AE9;
                    border-radius: 16px;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                      i {color: white; font-size: 16px;}
                  }
                  &__icon-cam {
                    background: #6BB1F9;
                    border-radius: 16px;
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                      i {color: white; font-size: 24px; font-weight: 400;}
                  }

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
                        font-weight: 500;
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
      }
    }
  }

</style>