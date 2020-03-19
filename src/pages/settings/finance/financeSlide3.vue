<template>
  <f7-page>
      <div class="finance__content">

            <div class="nav__bar">
                <f7-navbar back-link="" large-transparent></f7-navbar>
                <p class="nav__bar__title">Оплата и финансы</p>
            </div>

            <div class="finance__content__main">
                <div class="finance__content__main__cards">
                    <div class="finance__content__main__cards__card">
                        <div class="finance__content__main__cards__card__icon"></div>
                        <div class="finance__content__main__cards__card__text">
                            <span>Visa • 3456</span>
                        </div>
                        <div class="finance__content__main__cards__card__checkbox">
                            <label class="checkbox">
                                <input type="checkbox">
                                <i class="icon-checkbox"></i>
                            </label>
                        </div>
                    </div>
                    <div class="finance__content__main__cards__card">
                        <div class="finance__content__main__cards__card__icon"></div>
                        <div class="finance__content__main__cards__card__text">
                            <span>Visa • 8909</span>
                        </div>
                        <div class="finance__content__main__cards__card__checkbox">
                            <label class="checkbox">
                                <input type="checkbox">
                                <i class="icon-checkbox"></i>
                            </label>
                        </div>
                    </div>
                    <div class="finance__content__main__cards__new-card">
                        <p>Привязать карту</p>
                        <i class="f7-icons">chevron_right</i>
                    </div>
                </div>
                <div class="finance__content__main__balance">
                    <div class="finance__content__main__balance__title"><p>Текущий баланс</p></div>
                    <div class="finance__content__main__balance__desc">
                        <div></div>
                    </div>
                </div>
                <div class="finance__content__main__status">
                    <div class="finance__content__main__status__plus">
                        <p class="finance__content__main__status__plus-title">Заработано</p>
                        <p class="finance__content__main__status__plus-money-plus">298,00 $</p>
                        <div class="progressbar color-green" data-progress="30">
                            <span></span>
                        </div>
                    </div>
                    <div class="finance__content__main__status__minus">
                        <p class="finance__content__main__status__minus-title">Потрачено</p>
                        <p class="finance__content__main__status__minus-money-minus">31,455 $</p>
                        <div class="progressbar color-red" data-progress="30">
                            <span></span>
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
    .finance__content {

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

        &__main {
            background: #FFFFFF;
            margin-top: 10px;
            border-radius: 40px 40px 0px 0px;
            height: calc(100vh - 132px);
            padding: 20px 0 0 0;

                &__cards {

                    &__card {
                        border-bottom: 0.5px solid rgba(140, 140, 182, 0.2);
                        display: flex;
                        align-items: center;
                        height: 60px;
                        padding: 0 30px;

                            &__icon {
                                width: 33px;
                                height: 33px;
                                border-radius: 50%;
                                background: #4C75A3;
                            }
                            &__text {
                                margin-left: 20px;

                                    span {
                                        color: #4E3F6F;
                                        font-size: 18px;
                                        line-height: 21px;
                                        font-weight: 400;
                                    }
                            }
                            &__checkbox {
                                margin-left: auto;
                                    .checkbox {
                                        .icon-checkbox {
                                            border: 1px solid #6C53E7!important;
                                            background: white!important;

                                            &::after {
                                                color: #6C53E7!important;
                                            }
                                        }
                                    }
                            }
                    }
                    &__new-card {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 10px 30px;

                        p {
                            margin: 0;
                            color: #4E3F6F;
                            font-size: 20px;
                            line-height: 24px;
                            font-weight: 400;
                        }

                        i {
                            font-size: 16px;
                            color: #9393bb;
                        }
                    }
                }
                &__balance {
                    margin: 10px 15px;
                    background: #F5F5FF;
                    border-radius: 11px;
                }
                &__status {
                    background: #F5F5FF;
                    border-radius: 11px;
                    margin: 10px 15px;
                    padding: 0 15px;
                    display: flex;
                    align-items: center;

                        &__plus {
                            width: 50%;
                            display: flex;
                            flex-direction: column;
                            padding-right: 15px;
                                p {
                                    margin: 15px 0 0 0;
                                }
                                .progressbar {
                                    margin: 15px 0;
                                    height: 3px;
                                    background: #C4C4C4;
                                    max-width: 128px;
                                }
                                &-title {
                                    color: #8C8CB6;
                                    font-size: 16px;
                                    line-height: 19px;
                                }
                                &-money-plus {
                                    color: #219653;
                                    font-size: 22px;
                                    line-height: 26px;
                                }
                        }
                        &__minus {
                            width: 50%;
                            display: flex;
                            flex-direction: column;
                            padding-left: 15px;
                                p {
                                    margin: 15px 0 0 0;
                                }
                                .progressbar {
                                    margin: 15px 0;
                                    height: 3px;
                                    background: #C4C4C4;
                                    max-width: 128px;
                                }
                                &-title {
                                    color: #8C8CB6;
                                    font-size: 16px;
                                    line-height: 19px;
                                }
                                &-money-minus {
                                    color: #EB5757;
                                    font-size: 22px;
                                    line-height: 26px;
                                }
                        }
                }
        }
    }
</style>