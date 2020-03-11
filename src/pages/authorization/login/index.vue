<template>
  <f7-page class="welcome">
    <f7-swiper ref="swiper" id="swiper" :params="options" class="home-silder" pagination>
      <f7-swiper-slide v-for='slide in slides' :key="slide.text">
       
        <div class="skip">
          <span>Skip</span>
        </div>
          
          <f7-block class="text-center">
            
            <div class="slide-image">
              <img v-if="slide.visible" src="static/slides/1.png" class="img-responsive">
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

              <!-- <div class="slide-desc__btn">
                <div class="slide-desc__btn__wrapper">
                  <f7-button class="slide-desc__btn__wrapper__button" icon-f7="arrow_right" fill></f7-button>
                </div>
              </div> -->

            </div>

          </f7-block>
      </f7-swiper-slide>
    </f7-swiper>

    <div class="slide-btn">
      <div class="slide-btn__wrapper">
        <f7-button class="slide-btn__wrapper__button" icon-f7="arrow_right" fill></f7-button>
      </div>
    </div>  

    <f7-popup 
      :opened="!isCanShowContent"
      backdrop 
      push 
      swipeToClose 
      swipeHandler=".swipe-close-wrapper"
      class="login-pop-up"
      ref='loginPopup'
      @popup:close="slideBack()"
    >
      <f7-page login-screen>

          <div class="swipe-close-wrapper">
              <div class="swipe-back-handler"></div>
          </div>

          <login-widget></login-widget>

        </f7-page>
    </f7-popup>
  </f7-page>
</template>

<script>
import LoginWidget from "../../../components/widgets/login-widget/index.vue";

export default {
  name: '',

  components: {
    'login-widget' : LoginWidget
  },

  data() {
    return  {
      slide: { title: '', text: ''},
      isCanShowContent: true,
      isLoading: false,
      slides: [
          { title : '', text: 'Простой способ связаться с блогерами, медиа-звездами и экспертами.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Общайтесь с кумирами', text: 'Задавайте вопросы профессионалам, блогерам, звездам, спортсменам. Просто отправьте платное сообщение и получите быстрый и подробный ответ на Ваш вопрос.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Получайте уникальные видео', text: 'Вы можете заказать персонализированные видео-ролики от своих любимых знаменитостей, спортсменов или влиятельных лиц.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : 'Зарабатывайте', text: 'Установите стоимость контакта с вами и получайте деньги за каждый ответ. Ведите платные каналы, делитесь уникальным контентом и зарабатывайте.', image: '', visible: true, enter: 'fadeIn', leave: 'fadeOut'},
          { title : '', text: '', image: '', visible: false, enter: 'bounceIn', leave: 'zoomOut' }
      ],
      options: { 
        slidesPerView: 1, 
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        on: {
          slideChange: () => {
              
            if(this.$refs.swiper.swiper.activeIndex === (this.slides.length - 1)) {
                this.$f7.$(".login-sheet").css("min-height", '40%');
                this.isCanShowContent = false;
                this.isLoading = false;
            } else {
                this.isCanShowContent = true;
                this.$f7.$(".login-sheet").css("min-height", '20%');
            }
            
            this.slides.forEach((slide) => {
                slide.visible = false; 
            });
            
            this.slide = this.slides[this.$refs.swiper.swiper.activeIndex];
            
            setTimeout(() => {
                this.slide.visible = true;
            }, 200);
              
          }
        }
      }
    }
  },

  methods: {
                     
    getCurrentTitle() {
        if(this.$refs.swiper) {
            return this.slides[this.$refs.swiper.swiper.activeIndex].title;
        } else {
            return '';
        }
    },
    
    slideBack() {
          this.$refs.swiper.swiper.slidePrev();
    },
    
    nextSlide() {
        
        if(!this.$refs.swiper.swiper.isEnd) {
            this.$refs.swiper.swiper.slideNext();
        } else {

            this.$f7router.navigate("/login", {
                clearPreviousHistory: true
            });
        }
            
    },
    
    getOsVersion() {
            let unknown = '-';

            let nVer = navigator.appVersion;
            let nAgt = navigator.userAgent;
            let browser = navigator.appName;
            let version = '' + parseFloat(navigator.appVersion);
            let majorVersion = parseInt(navigator.appVersion, 10);
            let nameOffset, verOffset, ix;

            // Opera
            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Opera Next
            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            }
            // Edge
            else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
                browser = 'Microsoft Edge';
                version = nAgt.substring(verOffset + 5);
            }
            // MSIE
            else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            }
            // Chrome
            else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            }
            // Safari
            else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }
            // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            }
            // MSIE 11+
            else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Microsoft Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            }
            // Other browsers
            else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }
            // trim the version string
            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }

            // mobile version
            let mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

            // cookie
            let cookieEnabled = (navigator.cookieEnabled) ? true : false;

            if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                document.cookie = 'testcookie';
                cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
            }

            // system
            let os = unknown;
            let clientStrings = [
                {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                {s:'Windows Vista', r:/Windows NT 6.0/},
                {s:'Windows Server 2003', r:/Windows NT 5.2/},
                {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                {s:'Windows 98', r:/(Windows 98|Win98)/},
                {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                {s:'Windows CE', r:/Windows CE/},
                {s:'Windows 3.11', r:/Win16/},
                {s:'Android', r:/Android/},
                {s:'Open BSD', r:/OpenBSD/},
                {s:'Sun OS', r:/SunOS/},
                {s:'Linux', r:/(Linux|X11)/},
                {s:'iOS', r:/(iPhone|iPad|iPod)/},
                {s:'Mac OS X', r:/Mac OS X/},
                {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                {s:'QNX', r:/QNX/},
                {s:'UNIX', r:/UNIX/},
                {s:'BeOS', r:/BeOS/},
                {s:'OS/2', r:/OS\/2/},
                {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
            ];
            for (let id in clientStrings) {
                let cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            let osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'iOS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }

            // flash (you'll need to include swfobject)
            /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
            let flashVersion = 'no check';
            if (typeof swfobject != 'undefined') {
                let fv = swfobject.getFlashPlayerVersion();
                if (fv.major > 0) {
                    flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                }
                else  {
                    flashVersion = unknown;
                }
            }

        return {
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled,
            flashVersion: flashVersion
        };
    },
  },

        mounted() {
 
            // require("fingerprintjs2").get({}, (components) => {

            //     let d = this.getOsVersion();

            //     let keys = ['timezone', 'timezone_offset'];

            //      request.customRequestHeaders = {
            //          'device' : this.$f7.device.ios ? 'iPhone' : 'Android' ,
            //          'op_system' : d.os,
            //          'op_version' : d.osVersion.replace("_", '.'),
            //          'app_version' : '1.0.'
            //      };

            //      components.forEach(function(item) {

            //          if(keys.indexOf(item.key) >= 0) {
            //              request.customRequestHeaders[item.key] = item.value;
            //          }

            //      });


            //  });   
             
             
             setTimeout(() => {
                 this.$f7.$(".login-sheet").css("bottom", 0);
                 this.slide = this.slides[0];
                 this.slide.visible = true;
             }, 1000);
            
        }
}

</script>

<style lang="scss" >
  .welcome {
    background: #F2F2FE;
    padding: 15px;
    position: relative;
    overflow: hidden;
    overflow-x: hidden;
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

  .skip {
    position: absolute;
    top: 20px;
    right: 30px;

      span {
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
    justify-content: center;
    overflow: hidden;
  }

  .slide-image {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-desc {
    height: 50%;
    display: flex;
    margin-bottom: 50px;
    padding: 10px;
    position: relative;
    
    &__text {
      width: 70%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      text-align: left;

        &__title {
          margin-bottom: 10px;

          h2 {
            font-style: normal;
            font-weight: bold;
            font-size: 2em;
            line-height: 30px;
            color: #FFFFFF;
            margin: 0
          }
        }

        &__desc {
          min-height: 35%;
          text-align: left;
          span {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            color: #FFFFFF;
          }
        }
    }
  }

  .slide-btn {
      position: absolute;
      background: url('/static/slides/union.svg') no-repeat center;
      z-index: 9999;
      width: 70px;
      height: 200px;
      top: 60%;
      right: -2%;
      display: flex;
      justify-content: center;
      align-items: center;

      &__wrapper {

          &__button {
            background: #503EA9;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            position: relative;

              .f7-icons {
                position: absolute;
                top: 10px;
                left: 10px;
              }
          }
      }
    }

  @media (min-width: 768px) {
    .slide-desc__text__title {
      h2 {
        font-size: 5em;
        line-height: 1em;
      }
    }
    .slide-desc__text__desc {
      span {
        font-size: 2em;
        line-height: 1.2em;
      }
    }
    .slide-image {
      img {
        width: 60%
      }
    }
    .skip {
      position: absolute;
      top: 40px;
      right: 40px;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 2.2em;
          line-height: 17px;
          color: #FFFFFF;
        }
    }
  }
  @media (min-width: 1024px) {
    .slide-desc__text__title {
      h2 {
        font-size: 6em;
        line-height: 1em;
      }
    }
    .slide-desc__text__desc {
      span {
        font-size: 3em;
        line-height: 1.2em;
      }
    }
  }

  .login-pop-up {
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
  }

  .popup-backdrop {
    background: #F2F2FE;
  }

</style>