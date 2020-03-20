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
      
      &__services {
        height: 50vh;
        background: #FFFFFF;
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

                    .toggle {
                      .ios .toggle input[type="checkbox"]:checked + .toggle-icon {
                        background: #615DFA; //Исправить цвет
                      }
                      // .toggle-icon {
                      //   &:before {
                      //     background: #8C8CB6; //Исправить цвет
                      //   }
                      // }
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