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


        <div class="discover__recommend__content">

          <!-- <f7-swiper v-if="peopleData.length > 0" :params="{ slidesPerView: 'auto', centeredSlides: true, spaceBetween: 30 }">
            <f7-swiper-slide v-for="item in peopleData.slice(0, 7)" :key="item.id">
              <user-widget :item="item"></user-widget>
            </f7-swiper-slide>
          </f7-swiper> -->

          <!-- <user-widget :items="peopleData.slice(7, 15)"></user-widget>
          
          <f7-block>
              <user-widget v-for="item in peopleData.slice(15,17)" :item="item" :key="item.id"></user-widget>
          </f7-block>

            <user-widget :items="peopleData.slice(17, 30)"></user-widget>
            
            <f7-block>
              <user-widget v-for="item in peopleData.slice(30,31)" :item="item" :key="item.id"></user-widget>
          </f7-block>

          <user-widget :items="peopleData.slice(31)"></user-widget> -->

          <category-widget></category-widget>

          <f7-block-title class="discover__recommend__navbar" large large-transparent>
            <p>Рекомендации</p>
          </f7-block-title>
          
          <recommend-widget v-for="item in peopleItems" :key="item.id" :item="item"></recommend-widget>


        </div>
         
    </f7-page>
</template>

<script>
import UserWidget from '../../components/widgets/user-widget/index.vue'
import RecommendWidget from '../../components/widgets/recommend-widget/index.vue'
import CategoryWidget from '../../components/widgets/category-widget/index.vue'

export default {
    name: 'discover',

    components: {
      UserWidget, RecommendWidget, CategoryWidget
    },

    data() {
      return {
        allowInfinite: true,
        showPreloader: true
      }
    },

    computed: {

      peopleItems() {
        return !this.$store.getters.getPeopleItems ? [] : this.$store.getters.getPeopleItems
      },

      nextMaxId() {
        return !this.$store.getters.getNextMaxId ? null : this.$store.getters.getNextMaxId
      }
    },
 
    methods: {
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
      // Стоит делать проверку пуст ли начальный массив людей (из кеша), если нет, то подгружать
      this.$store.dispatch('GET_EXPLORE')
        .then( () => this.showPreloader = false)

      var location = window.location.hash.replace("#/", '');
      
      if(location.length > 0) {
        this.$f7router.navigate(`/${location}`);
        window.location.href = '/#/';
      }

    }
}

</script>

<style lang="scss">
  .discover {
    &__recommend__navbar {
      color: #4E3F6F;
      font-size: 24px;
      margin-top: 30px;
      margin-left: 30px;
        p {
          margin: 0
        }
    }

    &__recommend__content {
      min-height: 100%;
      border-radius: 40px 40px 0px 0px;
      background: #FFFFFF;
      padding: 25px 25px 25px 25px;
    }
  }
</style>