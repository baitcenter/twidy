<template>
    <f7-page 
        name="discover" 
        infinite
        no-swipeback
        stacked
        :infinite-distance="50"
        :infinite-preloader="showPreloader"
        @infinite="discoverNext"
        class="discover"
    >

        <div class="discover__search-widget">
          <search-widget></search-widget>
        </div>

        <div class="discover__hashtags">
          <f7-link no-link-class :href="`/hashtag`" >
            <span v-for="hashtag in hashTags" :key="hashtag.value">#{{hashtag.value}} </span>
          </f7-link>
        </div>

        <div class="slide-content">
          <swiper-widget></swiper-widget>
        </div>

        <div class="discover__category__content">
          <f7-block-title class="discover__category__content__title">
            <span class="discover__category__content__title__text">Категории</span>
            <span @click="getMoreCategory" class="discover__category__content__title__show-all">{{categoryShow}}</span>
          </f7-block-title>

          <div class="discover__category__content__widget">

             <category-widget v-for="category in categorys.slice(0, caregoryRange)" :key="category.id" :category="category"></category-widget>
             
          </div>

        </div>

        <div class="discover__background"></div>


        <f7-block-title class="discover__recommend__title">
          <span>Рекомендации</span>
        </f7-block-title>

        <div class="discover__recommend__content">
          
          <recommend-widget v-for="item in peopleItems" :key="item.id" :item="item"></recommend-widget>

        </div>
         
    </f7-page>
</template>

<script>
import RecommendWidget from '../../components/widgets/recommend-widget/index.vue'
import CategoryWidget from '../../components/widgets/category-widget/index.vue'
import SwiperWidget from '../../components/widgets/swiper-widget/index.vue'
import SearchWidget from '../../components/widgets/search-widget/index.vue'

export default {
    name: 'discover',

    components: {
      SearchWidget, SwiperWidget, RecommendWidget, CategoryWidget
    },

    data() {
      return {
        allowInfinite: true,
        showPreloader: true,
        categoryShow: 'Показать все',
        caregoryRange: 6
      }
    },

    computed: {
      categorys() {
        return !this.$store.getters.getCategorys ? [] : this.$store.getters.getCategorys
      },

      peopleItems() {
        return !this.$store.getters.getPeopleItems ? [] : this.$store.getters.getPeopleItems
      },

      nextMaxId() {
        return !this.$store.getters.getNextMaxId ? null : this.$store.getters.getNextMaxId
      },

      hashTags() {
        return !this.$store.getters.getHashtags ? [] : this.$store.getters.getHashtags
      }
    },
 
    methods: {

      getMoreCategory() {
        if (this.caregoryRange === 6) {
          this.categoryShow = 'Скрыть';
          this.caregoryRange = this.categorys.length;
        } else {
          this.categoryShow = 'Показать все';
          this.caregoryRange = 6
        }
      },

      discoverNext() {
        if(!this.allowInfinite) {
          return;
        }
        
        if(this.peopleItems.length > 50) {
          this.showPreloader = false;
          this.allowInfinite = false;
          return;
        }
        
        this.allowInfinite = false;

        this.$store.dispatch('GET_EXPLORE_NEXT', this.nextMaxId)
          .then( () => {
            this.showPreloader = false;
            this.allowInfinite = true
          })
      }
    },

    mounted() {
      this.$store.dispatch('GET_CATEGORYS')

      // Стоит делать проверку пуст ли начальный массив людей (из кеша), если нет, то подгружать
      this.$store.dispatch('GET_EXPLORE')
        .then( () => this.showPreloader = false)

      let location = window.location.hash.replace("#/", '');
      
      if(location.length > 0) {
        this.$f7router.navigate(`/${location}`);
        window.location.href = '/#/';
      }

    }
}

</script>

<style lang="scss">
  .swiper-slide {
    width: 312px;
    height: 205px;
  }

  .slide-content {
    margin-top: 20px;
    position: relative;
    z-index: 2;
  }

  .discover {
    height: 100vh;
    width: 100%;
    background: #F2F2FE;
    position: relative;

    &__search-widget {
      position: relative;
      z-index: 2;
      padding: 0 30px;
      margin-top: 20px;
    }

    &__hashtags {
      margin-top: 15px;
      padding: 0 30px;
      position: relative;
      z-index: 2;
      text-align: center;

        span {
          color: white;
        }
    }

    &__recommend__title {
      height: 40px;
      color: #4E3F6F;
      font-size: 24px;
      margin: 10px 0 10px 30px;
    }

    &__category__content {
      position: relative;
      min-height: 300px;
      margin-top: 20px;
      background: #F2F2FE;
      padding: 25px;
      border-radius: 40px 40px 0px 0px;
      z-index: 2;

        &__title {
          margin: 0;
          height: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 4px;

            &__text {
              color: #4E3F6F;
              font-size: 24px;
            }

            &__show-all {
              color: #615DFA;
              font-size: 13px;
              letter-spacing: -0.02em;
              font-weight: 400;
            }
        }

        &__widget {
          max-height: 100%;
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;

            .category__widget {
              width: calc(50% - 8px);
              margin: 4px;
            }
        }
    }

    &__background {
      background: #534F5E;
      position: absolute;
      height: 600px;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1
    }

    &__recommend__content {
      min-height: 100%;
      border-radius: 40px 40px 0px 0px;
      background: #FFFFFF;
      padding: 25px 25px 5px 25px;
    }
  }
</style>