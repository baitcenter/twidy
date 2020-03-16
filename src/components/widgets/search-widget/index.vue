<template>
    <f7-link no-link-class :href="`/search`" >
        <div class="search">
          <input placeholder="Поиск звезд, блогеров, спортсменов..." type="text" >
          <i class="f7-icons search__icon">search</i>
        </div>
    </f7-link>
</template>

<script>

  export default {
    name: 'search-widget',
  }

</script>

<style lang="scss">
  .search {
      display: flex;
      align-items: center;
      position: relative;

      input {
        max-width: 312px;
        padding: 0 10px 0 35px;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        opacity: 0.2;
        background: #000000;
        backdrop-filter: blur(16px);

          &::placeholder {
            font-size: 13px;
            line-height: 16px;
            letter-spacing: -0.02em;
            color: #FFFFFF;
            opacity: 1;
          }
      }

      &__icon {
        font-size: 20px;
        position: absolute;
        color: white;
        left: 10px;
      }
  }
</style>