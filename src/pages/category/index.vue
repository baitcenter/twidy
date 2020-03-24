<template>
  <f7-page class="category-page safe-area">

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
        <div class="nav__bar__title"><p>{{Category.name}}</p></div>
    </div>

    <div class="category-page__content">

      <div class="searchbar">
        <div class="searchbar-inner">
          <div class="searchbar-input-wrap">
            <input type="search" :placeholder="`Поиск в категории ${Category.name.toLowerCase()}`">
            <i class="searchbar-icon"></i>
            <span class="input-clear-button"></span>
          </div>
        </div>
      </div>

      <f7-link class="category-page__content__user" href="/404" no-link-class v-for="i in 20" :key="i">
        <div class="category-page__content__user-item">
          <div class="category-page__content__user-item__photo">
            <img src="static/chat.png" alt="">
          </div>

          <div class="category-page__content__user-item__biogr">
            <p class="category-page__content__user-item__biogr__title">
              <span>Наталья</span> <span>Давыдова</span>
            </p>
            <p class="category-page__content__user-item__biogr__text">Бьюти-блогер, фитнес-гуру, пропагандирует здоровый образ жизни...</p>
          </div>

          <div class="category-page__content__user-item__link">
            <i class="f7-icons">chevron_right</i>
          </div>
        </div>
      </f7-link>

    </div>

  </f7-page>
</template>

<script>
export default {
  name: 'category',

  props: {
    Category: {
      type: Object,
      default: () => { return {} }
    }
  },
}
</script>

<style lang="scss" scoped>
  .category-page {
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

          p {font-size: 18px; line-height: 21px; color: #4E3F6F; font-weight: 500;}
      }
    }

    &__content {
      background: #FFFFFF;
      border-radius: 40px 40px 0px 0px;
      padding: 20px 32px;
      min-height: calc(100% - 97px);

        .searchbar {
          background: white;

          &:after {
            display: none;
          }
          
          .searchbar-inner {
            padding: 0;
            background: white;
            
            .searchbar-input-wrap {
              height: 100%;
              border-radius: 8px;
              background: white;

                i {
                  left: 10px;
                }

                input {
                  background: rgba(140, 140, 182, 0.1);
                  border-radius: 8px;
                  padding: 0 25px 0 30px;
                  font-size: 15px;
                  line-height: 17px;
                  color: #4E3F6F;

                  &::placeholder {
                    font-size: 14px;
                    line-height: 17px;
                    color: #8C8CB6;
                  }
                }

                span {
                  right: 10px;
                }
            }
          }
        }

        &__user {

          &-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 15px;

            &__photo {

                img {
                  width: 56px;
                  height: 56px;
                  border-radius: 16px;
                }
            }

            &__biogr {
              margin-left: 10px;

              &__title {
                font-size: 16px;
                line-height: 19px;
                letter-spacing: -0.02em;
                font-weight: 500;
                color: #4E3F6F;
              }

              &__text {
                margin-top: 5px;
                font-size: 13px;
                line-height: 16px;
                letter-spacing: -0.02em;
                color: #8C8CB6;
              }

              p {
                margin: 0;
                padding: 0;
              }
            }

            &__link {
              margin-left: auto;
                i {
                  font-size: 16px;
                  color: #8C8CB6
                }
            }
          }
        }
    }
  }
</style>