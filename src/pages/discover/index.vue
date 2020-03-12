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

        <f7-navbar class="discover__recommend__navbar" title="Рекомендации" large title-large="Рекомендации" large-transparent></f7-navbar>
        
        <div class="discover__recommend__content">

          <f7-swiper v-if="exploreData.people.length > 0" :params="{ slidesPerView: 'auto', centeredSlides: true, spaceBetween: 30 }">
            <f7-swiper-slide v-for="item in exploreData.people.slice(0,10)">
              <user-widget :item="item"></user-widget>
            </f7-swiper-slide>
          </f7-swiper>

          <user-widget :items="exploreData.people.slice(10, 15)"></user-widget>
          
          <f7-block>
              <user-widget v-for="item in exploreData.people.slice(15,17)" :item="item"></user-widget>
          </f7-block>

            <user-widget :items="exploreData.people.slice(17, 30)"></user-widget>
            
            <f7-block>
              <user-widget v-for="item in exploreData.people.slice(30,31)" :item="item"></user-widget>
          </f7-block>

          <user-widget :items="exploreData.people.slice(31)"></user-widget>

        </div>
         
    </f7-page>
</template>

<script>

// import explore from '@/components/modules/explore'
import UserWidget from '../../components/widgets/user-widget/'

export default {
    name: '',

    components: {
      UserWidget
    },

    data() {
      return {
        allowInfinite: true,
        showPreloader: false //true tyt nado
      }
    },

    computed: {
      exploreData() {
        return !this.$store.getters.getExploreData ? [] : this.$store.getters.getExploreData
      }
    },
 
    methods: {
      discoverNext() {
        if(!this.allowInfinite) {
          return;
        }
        
        if(this.exploreData.people.length > 50) {
          this.showPreloader = false;
          this.allowInfinite = false;
          return;
        }
        
        this.allowInfinite = false;
        
        // explore.next(() => {
        //   this.allowInfinite = true;
        // });
          
      },
    },

    mounted() {

      this.$store.dispatch('getData')

      // if(this.exploreData.people.length === 0) {
      //   explore.get(() => {});
      // }
      
      // var location = window.location.hash.replace("#/", '');
      
      // if(location.length > 0) {
      //   this.$f7router.navigate(`/${location}`);
      //   window.location.href = '/#/';
      // }

    }
}

</script>

<style lang="scss">
  .discover {
    &__recommend__navbar {
      color: #4E3F6F;
      font-size: 24px;
    }

    &__recommend__content {
      height: 300px;
      border-radius: 40px 40px 0px 0px;
      background: #FFFFFF;

        div {
          margin-top: 0!important
        }
    }
  }
</style>