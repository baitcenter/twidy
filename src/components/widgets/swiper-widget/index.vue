<template>
  <f7-swiper class="swiper-content" pagination :params="{ slidesPerView: 'auto', centeredSlides: true, spaceBetween: 10}">
      <f7-swiper-slide  v-for="i in 7" :key="i">
         <f7-link :href="`/${i}`" no-link-class>
            <f7-swiper-slide>
              <img class="swiper-slide" src="static/durov.png" alt="">
            </f7-swiper-slide>
          </f7-link>
      </f7-swiper-slide>
  </f7-swiper>
</template>

<script>

  export default {
    name: 'swiper-widget',

    props: ['slide'],
  }

</script>

<style lang="scss">
.swiper-content {
  height: 250px
}

  .swiper-pagination-bullets {
    z-index: 9999;
    bottom: 10px!important;

      .swiper-pagination-bullet {
        background: red;
        opacity: 1;
      }
  }
</style>