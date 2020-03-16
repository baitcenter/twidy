<template>
  <div 
    data-pagination='{"el": ".swiper-pagination"}' 
    data-space-between="10" 
    data-slides-per-view="auto" 
    data-centered-slides="true" 
    class="swiper-container swiper-init demo-swiper demo-swiper-auto discover-slider">

    <div class="swiper-pagination pagination-class"></div>
    <div class="swiper-wrapper">
      <div v-for="i in 7" :key="i" class="swiper-slide">
        <f7-link :href="`/${i}`" no-link-class>
          <img class="swiper-slide" src="static/durov.png" alt="">
        </f7-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'swiper-widget',

    props: ['slide'],
  }

</script>

<style lang="scss">

.discover-slider {
  position: relative;
  height: 250px;

  .pagination-class {
    position: absolute;
    top: 225px;
    margin: 0 4px;

      span {
        background: #E8E8F0;
        border-radius: 8px;
        height: 1px;
        width: 20px;
      }

      span[class="swiper-pagination-bullet swiper-pagination-bullet-active"] {
        height: 3px;
      }
  }
}
</style>