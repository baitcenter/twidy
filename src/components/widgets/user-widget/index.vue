<template>
    <!-- <f7-link no-link-class :href="`/${item.domain}`" :route-props="{ User: item }"> -->
        <div class="card card-style-2" style="margin-top: 55px;">
          <div class="card-image-container">
              <!-- <img class="card-image" :src="item.photo" alt=""> -->
          </div>
          <div class="card-infos">
            <!-- <div v-if="item.industry" class="card-category">{{ item.industry }}</div>
            <h2 class="card-title">{{ item.firstName }} {{ item.lastName }}</h2> -->
            <!-- <p v-if="item.biography" class="card-description">
                {{ item.biography.slice(0,125) }}<span v-if="item.biography.length > 125">...</span>
            </p> -->
          </div>
        </div>
    <!-- </f7-link> -->
</template>

<script>

    export default {

      name: 'user-widget',

      props: ['item'],
    }

</script>