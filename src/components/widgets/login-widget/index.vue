<template>
    <div>
            <f7-popup ref="country" @popup:open='countryPopupOpened = true;' @popup:opened="$refs.searchbar.enable(); " @popup:close="countryPopupOpened = false;" push >
                
                <f7-page>
                    <f7-searchbar
                          @searchbar:disable="$refs.country.close();"
                          ref="searchbar"
                          disable-button-text="Отмена"
                          placeholder="Поиск страны"
                          search-container=".country-list"
                          search-in=".title"
                          :backdrop="false"
                          :clear-button="true"
                        >
                    </f7-searchbar>
                    
                    <f7-list class="country-list" v-if="countryPopupOpened">
                        <f7-list-item v-for="c in countrys" :key="c.name" link no-chevron @click="phoneCode = `${c.phonecode}`; current = c; $refs.searchbar.disable();">
                          <div slot="title">
                              {{ c.name }}
                          </div>
                          <div slot="after">
                              +{{ c.phonecode }}
                          </div>
                        </f7-list-item>
                    </f7-list>
                    
                </f7-page>
                
            </f7-popup>
        
            <div v-if="is_need_password">
                <f7-block-title>
                    Пароль
                </f7-block-title>
                <f7-block>
                    <p>У Вас включена двухфакторная авторизация, пожалуйста, введите Ваш пароль.</p>
                </f7-block>


                <f7-list no-hairlines>
                    <f7-list-item>
                        <f7-input
                        type="password"
                        name="user_password"
                        autocomplete="off"
                        placeholder="Ваш пароль"
                        input-id="passwordSignInput"
                        @input="password = $event.target.value"
                        :value="password"
                        ></f7-input>
                    </f7-list-item>
                </f7-list>

                <f7-button @click="auth()" fill large round style="margin: 0 5%;">
                    <span>Войти</span>
                </f7-button>
            </div>
            <div class="content" v-else-if="is_need_code">

                <f7-block-title class="content__title" large>Код проверки</f7-block-title>
                    <f7-block class="content__desc">
                        <p> Мы отправили код проверки на указанный Вами номер телефона. </p>
                    </f7-block>

                    <f7-list class="content__input-code" no-hairlines>
                        <f7-list-item>
                            <f7-input
                                class="code-input"
                                type="tel"
                                autofocus
                                placeholder="Код проверки"
                                v-mask="'####'"
                                :value="codeSign"
                                input-id="codeSignInput"
                                inputStyle="letter-spacing: 30px; width: 100%; text-align: center; border-bottom: 1px solid rgba(140, 140, 182, 0.5)"
                                @input="onCodeInput($event.target.value)"
                            > 
                            </f7-input>
                        </f7-list-item>
                    </f7-list>

                    <div class='text-code'>
                      <span>Неверный номер телефона?<a href="javascript:void(0)" @click="is_need_code = false"> Введите правильный</a></span>
                        <span v-if="!is_allowed_code_repeat">Повторная отправка возможна через {{RepeatTwoFactor}} секунд.</span>
                        <a v-else href="javascript:void(0)" @click="twoFactor()">Отправить код заново</a> 
                    </div>

            </div>
        <div class="content" v-else>
            <f7-block-title class="content__title" large> Авторизация </f7-block-title>
                
                <f7-block class="content__desc">
                    Проверьте код страны и введите свой номер телефона.
                </f7-block>

                    <f7-list no-hairlines no-hairlines-between>
                    <f7-list-item class="country-list" link @click="$refs.country.open();">
                        <div v-if='current !== null' slot='title' >
                           {{ current.name }}
                        </div>
                        <div v-else slot='title' >
                            Выбрать страну
                        </div>
                    </f7-list-item>

                    <f7-list-item  class="phone-list" v-if='phoneCode !== ""'>
                        <f7-list-item-row>
                            <f7-list-item-cell style="max-width: 15%; border-right: 1px solid rgba(0,0,0,0.1);">
                                <f7-input 
                                    type="tel"
                                    :value="`+${phoneCode}`" 
                                    v-mask="'+####'"
                                    placeholder="+7"
                                    inputStyle="text-align: center; color: #4E3F6F;"
                                    @input="phoneCode = $event.target.value"
                                    :disabled="true"
                                > 
                                </f7-input>
                            </f7-list-item-cell>
                            <f7-list-item-cell>
                                <f7-input 
                                    type="tel"
                                    @input="phoneNumber = $event.target.value"
                                    :value="phoneNumber" 
                                    placeholder="Номер телефона"
                                    :clear-button="true"
                                    inputStyle="color: #4E3F6F;"
                                    v-mask="'### ### ## ##'"
                                > 
                                </f7-input>
                            </f7-list-item-cell>
                        </f7-list-item-row>
                    </f7-list-item>

                </f7-list>
        
                <f7-block style="margin-left: 0!important; margin-right: 0!important " v-if='phoneNumber !== ""' > 
                    <f7-button class="two-factor-btn" @click='twoFactor()' large fill round style="width: 100%;">
                        Получить код проверки
                    </f7-button> 
                </f7-block>
        </div>
                     
    </div>
</template>

<script>
import keypad from '../input-number/index.vue'
import axios from 'axios'
import notify from "@/components/modules/notify/";
import request from '@/components/modules/request/'

export default {
  name: 'login-widget',

  components: {
    'keypad': keypad
  },

  data() {
    return {
      db: [],
      countryPopupOpened: false,
      RepeatTwoFactor: 60,
      is_allowed_code_repeat: false,
      phoneCode: "7",
      phoneNumber: "",
      password: "",
      code: "",
      codeSign: '',
      keyPad: null,
      mask: '+7 ### ### ## ##',
      is_show_auto: true,
      identification: "",
      is_need_code: false,
      current: null,
      isLoginScreen: false,
      is_already_submit: false,
      is_need_password: false,
      preview: null,
      items: [],
      vlData: {
        items: [],
      },

      countrys: [],
      location: null,
      country: ''
    }
  },

  computed: {
    filterCountrys: function() {
      
    }
  },
    methods: {
      auth() {
          
          if(this.is_already_submit) {
              return;
          } else {
              this.is_already_submit = true;
          }
          
          let self = this;
          
          this.$f7.dialog.preloader('');
          
          let CryptoJS = require("crypto-js");
          let SHA1 = require("crypto-js/sha1");
          
          if(this.is_need_password) {
            let password = SHA1(this.password).toString();
          } else {
            let password = null;
          }
          
          
          let $$ = this.$f7.$;
          
          $$("#codeSignInput").blur();
          $$("#passwordSignInput").blur();
          
          request.post("/auth/login/", {
              phoneNumber: this.phoneCode + this.phoneNumber,
              code: this.codeSign,
              identification: this.identification,
              password: password
          }, (response) => {
              
              request.setCookie("access_token", response.access_token, response.days);
              request.setCookie("call", JSON.stringify({ id: response.call_id }), response.days);

              this.$f7.dialog.close();
              this.is_already_submit = false;

              this.$f7router.navigate("/", {
                clearPreviousHistory: true,
                animate: false
              });
              
              this.$f7.popup.close(".login-pop-up");
              this.$refs.passwordPopUp.close();
              this.is_need_code = false;
              
          }, (e) => {
              
              this.$f7.dialog.close();
              
              this.is_already_submit = false;
              
              if(!e.responseData) {
                return;
              }
              
              if(e.responseData.is_need_password) {
                  this.is_need_password = true;
                  this.isLoginScreen = false;
                  this.is_need_code = false;
                  this.$f7.popup.open(".is-need-password");
                  this.preview = e.responseData.user;
                  return;
              }
              
                self.code = '';
            
          });
          
      },

      getPhoneMask() {
          let mask = '+' + this.phoneCode.toString();
          mask = mask + ' ### ###-##-##';
          this.mask = mask;
          return mask;
      },

      repeatTimerStart() {
        this.RepeatTwoFactor = 60;
        this.is_allowed_code_repeat = false;
        let interval = setInterval(() => {
            if(this.RepeatTwoFactor === 0) {
                this.is_allowed_code_repeat = true;
                clearInterval(interval);
            } else {
                this.RepeatTwoFactor = this.RepeatTwoFactor - 1;
            }
        }, 1000);

      },
      onCodeInput(code) {
        this.codeSign = code;
        if(this.codeSign.length === 6) {
            this.auth();
        }
      },

      twoFactor() {
        if(this.phoneNumber.replace(/\s/g, '').length < 10) {
            alert('Недостаточно цифр');
            return false;
        }
        
      this.$store.dispatch('GET_AUTH', {
        phone: this.phoneCode + this.phoneNumber
      })

        // this.$f7.dialog.preloader('');

        // axios.post('http://dev.twidy.ru/api/methods/auth?', {
        //   phone: this.phoneCode + this.phoneNumber
        // })
        //   .then( resp => {
        //     console.log(resp)
        //     this.$f7.dialog.close();

        //     this.is_need_code = true;
        //     this.identification = resp.data.result.i;
        //     this.repeatTimerStart();
            
        //   })
        //   .catch( e => {
        //     this.$f7.dialog.close();
        //     console.log(e)
        //   })

        // request.post("/auth/login/twofactor.request/", {
        //     phoneNumber: this.phoneCode + this.phoneNumber
        // }, (r) => {
            
        //     this.$f7.dialog.close();

        //     that.is_need_code = true;
        //     that.identification = r.identification;
        //     that.repeatTimerStart();
            
        //     document.getElementById("codeSignInput").focus();
            
        // }, (e) => {
        //     this.$f7.dialog.close();
        // })

      },
      SelectCountry(country) {
          this.phoneNumber = '';
          this.current = country;
          this.phoneCode = country.phonecode;
          this.phoneNumber = '';
          this.getPhoneMask();
      },
    },

    mounted() {
      this.$store.dispatch("GET_COUNTRY_LIST")
        .then( resp => {
          this.countrys = resp.country;
          return this.$store.dispatch("GET_LOCATION")
        })
        .then( location => {
          this.countrys.forEach( country => {
            if(country.name === location.name) {
              this.SelectCountry(country);
              return;
            }
          })
        })
    }
}
</script>

<style lang="scss">
  .content {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

      &__title {
        font-style: normal;
        font-weight: 300;
        font-size: 36px;
        line-height: 38px;
        color: #4E3F6F;
      }

      &__desc {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #4E3F6F;
      }
  }

  .country-list {
    border-top: 1px solid rgba(140,140,182,0.25);
    border-bottom: 1px solid rgba(140,140,182,0.25);
    color: #4E3F6F;
  }

  .phone-list {
    border-bottom: 1px solid rgba(140,140,182,0.25);
    .item-content {
      .item-inner {
        padding-top: 0;
        padding-bottom: 0;

          &::after {
            content: url()
          }
      }
    }
  }

  .two-factor-btn {
    background: #615DFA;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 14px;
  }

  .code-input {
    input {
      font-size: 18px;
      color: #4E3F6F;
      letter-spacing: 0.5em;

      &::placeholder {
        font-size: 18px;
        letter-spacing: 5px;
        color: #8C8CB6;
        opacity: 0.5;
      }
    }
  }

  .text-code {
    padding: 0 5%;
    font-size: 12px;
    color: #8C8CB6;
  }
</style>