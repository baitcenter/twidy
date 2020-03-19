<template>
  <f7-page class="finance-page safe-area">
    <div class="nav__bar">
        <f7-navbar back-link="" large-transparent></f7-navbar>
        <p class="nav__bar__title">Оплата и финансы</p>
    </div>

    <div 
        data-pagination='{"el": ".swiper-pagination"}' 
        data-space-between="10" 
        data-slides-per-view="2" 
        data-centered-slides="false" 
        class="swiper-container swiper-init demo-swiper demo-swiper-auto discover-slider">

        <div class="swiper-wrapper">
            <div class="swiper-popup-active-btn">
                <f7-button fill popup-open=".popup-new-card" class="social__popup popup__item">
                    click
                </f7-button>
            </div>
            <div v-for="i in 5" :key="i" class="swiper-slide">
                <div style="background: grey; border-radius: 8px; width: 180px; height: 110px;"></div>
            </div>
        </div>
    </div>

    <f7-popup class="popup-new-card" swipe-to-close swipe-handler=".swipe-handler">
        <f7-page>
            <div class="social__popup__content">
                <div class="swipe-handler">
                    <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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

        <div class="">
            <f7-button fill popup-open=".popup-outcome-money" class="social__popup popup__item">
                Заявка на вывод <i class="f7-icons">chevron_down</i>
            </f7-button>

            <f7-popup class="popup-outcome-money" swipe-to-close swipe-handler=".swipe-handler">
                <f7-page>
                    <div class="social__popup__content">
                        <div class="swipe-handler">
                            <svg width="51" height="4" viewBox="0 0 51 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="2" y1="2" x2="49" y2="2" stroke="#8C8CB6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <span>вывод денег</span>
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

    }

</script>

<style lang="scss" scoped>
    .finance-page {
        .nav__bar {
            margin-top: 10px;
            display: flex;
            align-content: center;
            height: 48px;

            .navbar {
                width: 10%;
            }

            &__title {
                color: #4E3F6F;
                font-size: 18px;
                line-height: 21px;
                font-weight: 400;
                margin: 10px 0 0 20%;
            }
        }

        .discover-slider {
            position: relative;
            height: 130px;

                .swiper-wrapper {

                        .swiper-popup-active-btn {
                            margin-left: 30px;
                            width: 60px;
                            height: 110px;
                            background: #FFFFFF;
                            border-radius: 8px;
                            color: black;
                            margin-right: 10px
                        }
                }
        }

        &__content {
            background: rgba(140, 140, 182, 0.1);
            border-radius: 40px 40px 0px 0px;
            padding: 25px 0 0 0;
            height: 100%;

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
        }
    }
</style>