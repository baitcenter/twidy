<template>
    <f7-link class="category__widget" :href="`/${category.name}`">

      <div :style="{backgroundImage: `url(${category.cover})`}" class="category__widget__categorys">

          <span class="category__widget__categorys__title">{{category.name}}</span>

      </div>

    </f7-link>
</template>

<script>

export default {
  name: 'acategory-widget',

  props: ['category']
}

</script>

<style lang="scss">
  .category__widget {
    max-height: 100%;

    &__categorys {
      background-size: cover;
      width: 100%;
      height: 80px;
      border-radius: 8px;
      position: relative;

        &__title {
          position: absolute;
          left: 8px;
          bottom: 8px;
          color: #4E3F6F;
          font-size: 14px;
          line-height: 17px;
        }
    }
  }
</style>