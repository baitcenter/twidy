<template>
  <f7-page class="finance-page safe-area">
    <div class="nav__bar">
        <f7-navbar back-link="" large-transparent></f7-navbar>
         <div class="nav__bar__title"><p>Оплата и финансы</p></div>
    </div>

    <div data-pagination='{"el": ".swiper-pagination"}' data-space-between="10" data-slides-per-view="2" data-centered-slides="true" class="finance-slider swiper-container swiper-init demo-swiper demo-swiper-auto">
        <div class="swiper-wrapper">
            <div class="swiper-popup-active-btn">
                <f7-button fill popup-open=".popup-new-card" class="social__popup popup__item">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7521 1.14038C10.7521 0.588096 10.3044 0.140381 9.75208 0.140381C9.19979 0.140381 8.75208 0.588097 8.75208 1.14038V8.14038H1.75208C1.19979 8.14038 0.752075 8.5881 0.752075 9.14038C0.752075 9.69267 1.19979 10.1404 1.75208 10.1404H8.75208V17.1404C8.75208 17.6927 9.19979 18.1404 9.75208 18.1404C10.3044 18.1404 10.7521 17.6927 10.7521 17.1404V10.1404H17.7521C18.3044 10.1404 18.7521 9.69267 18.7521 9.14038C18.7521 8.5881 18.3044 8.14038 17.7521 8.14038H10.7521V1.14038Z" fill="#4E3F6F"/>
                    </svg>
                </f7-button>
            </div>
            <div :class="[i == selectedCard ? 'selectedCard' : '', 'swiper-slide']" @click=test(i) v-for="i in 5" :key="i">{{i}}</div>
        </div>
    </div>

    <f7-popup class="popup-new-card" swipe-to-close swipe-handler=".swipe-handler">
        <f7-page>
            <div class="new-card__popup__content">
                <div class="swipe-handler">
                    <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

                <div class="new-card__popup__content__form">
                    <p class="new-card__popup__content__form__title">Добавить карту</p>
                    <div class="new-card__popup__content__form__wrapper">
                        <div class="new-card__popup__content__form__wrapper__card-number">
                            <img src="static/icons/visa-card.svg" alt="">
                            <input v-mask="'#### #### #### ####'" placeholder="Номер карты">
                        </div>
                        <div class="new-card__popup__content__form__wrapper__card-date">
                            <input v-mask="'##/##'" placeholder="Срок действия">
                            <input type="number" placeholder="CVC/CVV">
                        </div>
                        <div class="new-card__popup__content__form__wrapper__card-name">
                            <input type="text" placeholder="Имя держателя">
                        </div>
                    </div>
                    <div class="new-card__popup__content__form__info">
                        <p>Карта должна быть именной, не виртуальной и поддерживать безакцептное списание.</p>
                    </div>
                    <div class="new-card__popup__content__form__add-btn">
                        <button>Добавить карту</button>
                    </div>
                    <div class="new-card__popup__content__form__cancel-btn">
                        <button><f7-link popup-close>Отмена</f7-link></button>
                    </div>
                </div>
            </div>
        </f7-page>
    </f7-popup>

    <div class="finance-page__content">
        <f7-block-title class="finance-page__content__title">
            <span class="finance-page__content__title__text">Текущий баланс</span>
        </f7-block-title>

        <div class="finance-page__content__balance">
            <p class="finance-page__content__balance-text">10 000,00</p>
            <div class="finance-page__content__balance-income">
                <div class="finance-page__content__balance-income-minus">
                    <div class="finance-page__content__balance-income-minus-icon"></div>
                    <span>-2 000,00</span>
                </div>
                <div class="finance-page__content__balance-income-plus">
                    <div class="finance-page__content__balance-income-plus-icon"></div>
                    <span>+12 000,00</span>
                </div>
            </div>
        </div>

        <div class="finance-page__content__outcome-money">
            <f7-button fill popup-open=".popup-outcome-money" class="money__popup popup__item">
                <p>Заявка на вывод</p><i class="f7-icons">chevron_down</i>
            </f7-button>

            <f7-popup class="popup-outcome-money" swipe-to-close swipe-handler=".swipe-handler">
                <f7-page>
                    <div class="popup-outcome-money__content">
                        <div class="swipe-handler">
                            <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>

                        <div class="popup-outcome-money__content__form">
                            <p class="popup-outcome-money__content__form__title">Счет зачисления</p>

                            <div class="popup-outcome-money__content__form__cards">
                                <div class="popup-outcome-money__content__form__cards__card" v-for="i in 5" :key="i">
                                    <div class="popup-outcome-money__content__form__cards__card__icon">
                                        <img src="static/icons/visa-card.svg" alt="">
                                    </div>
                                    <div class="popup-outcome-money__content__form__cards__card__text">
                                        <span>Visa • 3456</span>
                                    </div>
                                    <div class="popup-outcome-money__content__form__cards__card__checkbox">
                                        <label class="checkbox">
                                            <input type="checkbox">
                                            <i class="icon-checkbox"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="popup-outcome-money__content__form__salary">
                                <input type="number" placeholder="Сумма вывода">
                            </div>

                            <div class="popup-outcome-money__content__form__outcome-btn">
                                <button>Вывести</button>
                            </div>
                            <div class="popup-outcome-money__content__form__cancel-btn">
                                <button><f7-link popup-close>Отмена</f7-link></button>
                            </div>
                        </div>
                    </div>
                </f7-page>
            </f7-popup>
        </div>

        <div class="finance-page__content__history">
            <f7-block-title class="finance-page__content__history__title">
                <span class="finance-page__content__history__title__text">История</span>
            </f7-block-title>
            <div class="finance-page__content__history__user" v-for="i in 10" :key="i">
                <div class="finance-page__content__history__user__photo">
                    <img src="static/chat.png" alt="">
                </div>
                <div class="finance-page__content__history__user__biogr">
                    <p class="finance-page__content__history__user__biogr__title">Наталья Фабричнова</p>
                    <p class="finance-page__content__history__user__biogr__text">3 часа назад</p>
                </div>
                <div class="finance-page__content__history__user__money">
                    <p>+750$</p>
                </div>
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
                selectedCard: 1
            }
        },

        methods: {
            test(i) {
                console.log(i)
                this.selectedCard = i;
            }
        }
    }

</script>

<style lang="scss" scoped>
    .finance-page {
        .nav__bar {
            display: flex;
            align-items: center;

            .navbar {
                width: 10%;
            }

            &__title {
                width: 90%;
                display: flex;
                justify-content: center;
                margin-right: 20px;

                p {font-size: 18px; line-height: 21px; color: #4E3F6F;}
            }
        }

        .finance-slider {
            position: relative;
            height: 130px;

                .swiper-wrapper {
                        .swiper-popup-active-btn {
                            margin-left: -70px;
                            width: 60px;
                            height: 110px;
                            background: #FFFFFF;
                            border-radius: 8px;
                            margin-right: 10px;

                                a {
                                    width: 60px;
                                    height: 100%;
                                    background: white;
                                    display: flex;
                                    align-items: center
                                }
                        }
                        .swiper-slide-active, .swiper-slide-prev, .swiper-slide-next {
                            max-width: 180px;
                            height: 110px
                        }
                        .swiper-slide {
                                background: grey; 
                                border-radius: 8px; 
                                height: 110px; 
                                width: 180px;
                        }
                }
        }

        &__content {
            background: rgba(140, 140, 182, 0.1);
            border-radius: 40px 40px 0px 0px;
            padding: 25px 0 0 0;
            max-height: 100%;

                &__title {
                    margin: 0 0 0 32px;
                    &__text {
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                        color: #4E3F6F;
                    }
                }

                &__balance {
                    margin: 0 auto;
                    max-width: 312px;
                    text-align: center;

                    &-text {
                        font-size: 36px;
                        line-height: 38px;
                        color: #4E3F6F;
                        font-weight: bold;
                        margin-bottom: 0
                    }

                    &-income {
                        margin-top: 15px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        
                            &-minus {
                                display: flex;
                                align-items: center;

                                &-icon {
                                    width: 12px;
                                    height: 12px;
                                    background: #8C8CB6;
                                    border-radius: 50%
                                }
                                span {
                                    margin-left: 5px;
                                    font-weight: 600;
                                    font-size: 12px;
                                    line-height: 14px;
                                    color: #8C8CB6;
                                }
                            }
                            &-plus {
                                margin-left: 20px;
                                display: flex;
                                align-items: center;

                                &-icon {
                                    width: 12px;
                                    height: 12px;
                                    background: #FFA012;
                                    border-radius: 50%
                                }
                                span {
                                    margin-left: 5px;
                                    font-weight: 600;
                                    font-size: 12px;
                                    line-height: 14px;
                                    color: #8C8CB6;
                                }
                            }
                    }
                }
                &__outcome-money {
                    margin-top: 35px;

                    .money__popup {
                        margin: 0 32px;
                        background: #615DFA;
                        border-radius: 8px;
                        display: flex;
                        align-items: center;
                        height: 48px;

                            p {
                                font-size: 16px;
                                font-weight: 400;
                                text-transform: none;
                                color: #FFFFFF;
                            }
                            i {
                                margin-top: 3px;
                                margin-left: 20px;
                                color: #FFFFFF;
                                font-size: 16px
                            }
                    }
                }
                &__history {
                    margin: 40px 0 0 0;
                    background: #FFFFFF;
                    border-radius: 40px 40px 0px 0px;
                    height: 100%;
                    padding: 25px 0 60px 0;

                    &__title {
                        margin: 0 0 0 32px;

                        &__text {
                            font-weight: 500;
                            font-size: 20px;
                            line-height: 21px;
                            color: #4E3F6F;
                        }
                    }
                    &__user {
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                        padding: 0 30px 0 30px;
                        
                            &__biogr{
                                margin-left: 15px;
                                &__title {
                                    margin: 0;
                                    font-size: 18px;
                                    line-height: 21px;
                                    color: #4E3F6F;
                                    font-weight: 500;
                                }
                                &__text{
                                    margin: 8px 0 0 0;
                                    font-size: 14px;
                                    line-height: 17px;
                                    color: #8C8CB6;
                                }
                            }
                            &__money{
                                margin-top: auto;
                                margin-left: auto;
                                    p{
                                        background: #FFA012;
                                        border-radius: 11px;
                                        padding: 4px 8px;
                                        color: #FFFFFF;
                                        font-size: 11px;
                                        line-height: 13px;
                                        margin: 0;
                                    }
                            }
                    }
                }
        }
    }

  .popup-new-card {
    top: auto;
    max-height: 60%;
    bottom: 0;
    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;

    @media (max-height: 568px) {
        max-height: 85%;
    }

      .page {
        background: white;

            .new-card__popup__content {
                height: 100%;

                .swipe-handler {
                    padding: 17px 0;
                    display: flex;
                    justify-content: center
                }

                &__form {
                    padding: 0 32px;
                    &__title {
                        font-weight: 500;
                        font-size: 18px;
                        line-height: 21px;
                        color: #4E3F6F;
                    }
                    &__wrapper {
                        margin-top: 30px;

                        &__card-number {
                            position: relative;
                            img {
                                position: absolute;
                            }
                            input {
                                width: 84%;
                                border-top: none; border-right: none; border-left: none;
                                border-bottom: 1px solid #8C8CB6;
                                padding: 0 0 15px 50px;
                                font-size: 18px; line-height: 21px; color: #4E3F6F;

                                &::placeholder {font-size: 18px; line-height: 21px; color: #4E3F6F}
                            }
                        }
                        &__card-date {
                            margin-top: 17px;
                            display: flex;

                            input {
                                width: 50%;
                                border-top: none; border-right: none; border-left: none;
                                border-bottom: 1px solid #8C8CB6;
                                padding-bottom: 15px;
                                font-size: 18px; line-height: 21px; color: #4E3F6F;

                                &::placeholder {font-size: 17px; line-height: 21px; color: #4E3F6F;}
                                &:first-child {margin-right: 12px;}
                                &:last-child {margin-left: 12px;}
                            }
                        }
                        &__card-name {
                            margin-top: 17px;

                            input {
                                width: 100%;
                                border-bottom: 1px solid #8C8CB6;
                                padding-bottom: 15px;
                                font-size: 18px; line-height: 21px; color: #4E3F6F;

                                &::placeholder {font-size: 18px; line-height: 21px; color: #4E3F6F;}
                            }
                        }

                    }
                    &__info {
                        margin-top: 33px;
                        text-align: center;
                        
                            p {font-size: 12px; line-height: 20px; color: #8C8CB6;}
                    }
                    &__add-btn {
                        margin-top: 40px;

                        button {
                            background: #E8E8F0;
                            border-radius: 8px;
                            border: none;
                            height: 48px;
                            font-size: 17px;
                            line-height: 21px;
                            color: #8C8CB6;
                        }
                    }
                    &__cancel-btn {
                        margin-top: 5px;
                        button {
                            background: none;
                            border: none;
                            height: 48px;

                                a {
                                    font-size: 17px;
                                    line-height: 21px;
                                    color: #4E3F6F;
                                }
                        }
                    }
                }
            }
      }

  }

  .popup-outcome-money {
    top: auto;
    max-height: 70%;
    bottom: 0;
    background: #FFFFFF;
    border-radius: 20px 20px 0px 0px;

    @media (max-height: 568px) {
        max-height: 97%;
    }

      .page {
        background: white;

            .popup-outcome-money__content {
                height: 100%;

                .swipe-handler {
                    padding: 17px 0;
                    display: flex;
                    justify-content: center
                }

                &__form {
                    padding: 0 32px;

                        &__title {
                            font-weight: 500;
                            font-size: 18px;
                            line-height: 21px;
                            color: #4E3F6F;
                        }

                        &__cards {
                            
                            &__card {
                                border-bottom: 1px solid #8C8CB6;
                                padding-bottom: 10px;
                                margin-top: 10px;
                                display: flex;
                                align-items: center;

                                    &:last-child{border-bottom: none}

                                    &__text{
                                        margin-left: 15px;

                                        span {
                                            font-size: 16px;
                                            line-height: 21px;
                                            font-weight: 400;
                                            color: #4E3F6F;
                                        }

                                    }
                                    &__checkbox{
                                        margin-left: auto;
                                            .checkbox {
                                                .icon-checkbox {
                                                    background: white!important;

                                                    &::after {
                                                        border-radius: 50%;
                                                        background: #615DFA!important;
                                                        color: white!important;
                                                    }
                                                }
                                            }
                                    }
                            }
                        }
                        
                        &__salary {
                            margin-top: 35px;
                            input {
                                width: 100%;
                                border-bottom: 1px solid #8C8CB6;
                                padding-bottom: 15px;
                                font-size: 18px;
                                line-height: 21px;
                                color: #615DFA;

                                &::placeholder {font-size: 18px; line-height: 21px; color: #4E3F6F;}
                            }
                        }

                        &__outcome-btn {
                            margin-top: 40px;

                            button {
                                background: #E8E8F0;
                                border-radius: 8px;
                                border: none;
                                height: 48px;
                                font-size: 17px;
                                line-height: 21px;
                                color: #8C8CB6;
                            }
                        }
                        &__cancel-btn {
                            margin-top: 5px;
                            button {
                                background: none;
                                border: none;
                                height: 48px;

                                    a {
                                        font-size: 17px;
                                        line-height: 21px;
                                        color: #4E3F6F;
                                    }
                            }
                        }
                }
            }
      }

  }

  .selectedCard {
    &::after {
        content: url('/static/icons/Selected.svg');
        position: absolute;
        left: 40%;
        bottom: -15px;
        background: white;
        border-radius: 50%;
        width: 33px;
        height: 33px;
    }
  }
</style>