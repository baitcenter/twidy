<template>
    <f7-link class="recommend__widget" :href="`/${item.domain}`" no-link-class :route-props="{ User: item }">

      <div class="recommend__widget__recommend-user">

        <div class="recommend__widget__recommend-user__photo">
          <img :src="item.photo" alt="">
        </div>
        <div class="recommend__widget__recommend-user__biogr">
            <p class="recommend__widget__recommend-user__biogr__title">
              <span v-html="item.firstName"></span> <span v-html="item.lastName"></span>
            </p>
            <p class="recommend__widget__recommend-user__biogr__text">{{item.biography.length > 50 ? item.biography.slice(0, 50) + '…' : item.biography}}</p>
        </div>
        <div class="recommend__widget__recommend-user__link">
          <i class="f7-icons">chevron_right</i>
        </div>

      </div>
      
    </f7-link>
</template>

<script>

    export default {
      name: 'recommend-widget',

      props: ['item'],
    }

</script>

<style lang="scss">

.recommend__widget {
  &__recommend-user {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;

      &__photo {

          img {
            width: 56px;
            height: 56px;
            border-radius: 16px;
          }
      }

      &__biogr {
        margin-left: 15px;
        &__title {
          font-size: 18px;
          line-height: 21px;
          color: #4E3F6F;
        }

        &__text {
          font-size: 13px;
          line-height: 16px;
          color: #8C8CB6;
        }

        p {
          margin: 0;
          padding: 0;
        }
      }

      &__link {
        margin-left: auto;
          i {
            font-size: 16px;
            color: #8C8CB6
          }
      }
  }
}
</style>