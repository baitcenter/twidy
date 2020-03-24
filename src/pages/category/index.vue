<template>
  <f7-page class="category-page safe-area">
    <div>
      <span>category</span>
    </div>
  </f7-page>
</template>

<script>
export default {
  name: 'category',

  props: {
    Category: {
      type: Object,
      default: () => { return {} }
    }
  },
}
</script>

<style>

</style>