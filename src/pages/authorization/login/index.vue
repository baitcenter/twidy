<template>
  <f7-page class="welcome">
    <f7-swiper class="home-silder" pagination>
      <f7-swiper-slide v-for='slide in slides' :key="slide.text">
        <div class="skip">
          <span>Skip</span>
        </div>
          
          <f7-block class="text-center">
            
            <div style="width: 100%; height: auto; margin-top: 100px">
              <center>
                <img v-if="slide.visible" src="static/slides/1.png" class="img-responsive" style="width: 70%">
              </center>
            </div>

            <div class="slide-desc">
              
              <div class="slide-desc__text">
                <div class="slide-desc__text__title">
                  <h2 v-show="slide.visible"> {{ slide.title }} </h2>
                </div>
                <div class="slide-desc__text__desc">
                  <span v-show="slide.visible"> {{ slide.text }} </span>
                </div>
              </div>

              <div class="slide-desc__btn">
                <div class="slide-desc__btn__wrapper">
                  <button>
                  </button>
                </div>
              </div>

            </div>

          </f7-block>
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>
</template>

<script>

export default {
  data() {
    return  {
      slides: [
          { title : '', text: 'Простой способ связаться с блогерами, медиа-звездами и экспертами.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Общайтесь с кумирами', text: 'Задавайте вопросы профессионалам, блогерам, звездам, спортсменам. Просто отправьте платное сообщение и получите быстрый и подробный ответ на Ваш вопрос.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Получайте уникальные видео', text: 'Вы можете заказать персонализированные видео-ролики от своих любимых знаменитостей, спортсменов или влиятельных лиц.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Зарабатывайте', text: 'Установите стоимость контакта с вами и получайте деньги за каждый ответ. Ведите платные каналы, делитесь уникальным контентом и зарабатывайте.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : '', text: '', image: '', visible: false, enter: 'bounceIn', leave: 'zoomOut' }
      ]
    }
  }
}

// TODO: 1) кнопка из framework7, иконка в ней тоже, закругление из фигмы
</script>

<style lang="scss">
  .welcome {
    background: white;
    padding: 15px;
  }

  .home-silder {
    height: 100%;
    border-radius: 35px;
    position: relative;
    background: #503EA9;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    background: white;
    border-radius: 8px;
  }

  .swiper-button-prev {
    display: none
  }

  .skip {
    position: absolute;
    top: 20px;
    right: 30px;

      span {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
      }
  }

  .text-center {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .slide-desc {
    display: flex;
    margin-bottom: 50px;
    padding: 10px;
    min-height: 300px;
    
    &__text {
      width: 75%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

        &__title {
          margin-bottom: 40px;

          h2 {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: bold;
            font-size: 38px;
            line-height: 38px;
            color: #FFFFFF;
            margin: 0
          }
        }

        &__desc {
          min-height: 100px;
          span {
            font-family: SF Pro Display;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
          }
        }
    }

    &__btn {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      background: url();

      &__wrapper {
        background: white;
        border-radius: 50%;
        // position: absolute;
        // padding: 6px;
        // bottom: 80px;
        // right: -30px;

          button {
            background: #503EA9;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            
          }
      }
    }
  }


</style>