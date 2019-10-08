<template>
  <div class="recommendations-items">
    <div
      v-for="recommendation in recommendations"
      :key="recommendation.name"
      class="recommendation-item"
    >
      <div class="recommendation-item__content">
        <div class="recommendation-item__avatar">
          <BaseImage
            class="recommendation-item__photo"
            :img="recommendation.photo"
          />
          <QuatationMark class="recommendation-item__quatation-mark" />
        </div>
        <span class="recommendation-item__name">
          {{ recommendation.name }}
        </span>
        <h3 class="recommendation-item__quote">
          {{ recommendation.recommendation }}
        </h3>
      </div>
      <div class="recommendation-item__footer">
        {{ recommendation.position }}
      </div>
    </div>
  </div>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage.vue'
import QuatationMark from '@theme/assets/svg/quotation_mark.svg'
export default {
  components: {
    BaseImage,
    QuatationMark,
  },
  props: {
    recommendations: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.recommendations-items
  display flex
  justify-content space-between

.recommendation-item
  flex: 1
  border-radius 4px
  background $c-white
  text-align center
  box-shadow 0 10px 20px 0 rgba(#74675B, .06)

  & + &
    margin-left 30px

  &__content
    padding 50px 30px 40px

  &__avatar
    position relative
    width 80px
    height 80px
    margin 0 auto 16px
    overflow hidden
    color $c-primary

  &__quatation-mark
    position absolute
    right 0
    bottom 0
    width 28px
    height 28px

  &__photo
    margin 0
    border-radius 50%

  &__name
    color $c-landing-gray
    font-size 10px
    font-weight $fw-bold
    letter-spacing 0.2em
    line-height 1.3
    text-transform uppercase

  &__quote
    margin 20px 0 10px
    color $c-landing-text
    font-size $fs-4
    font-weight $fw-semibold
    line-height 1.3

  &__footer
    position relative
    display flex
    flex-direction column
    justify-content center
    height 94px
    padding 10px 30px
    border-top 1px solid #F6F6F3
    color #B5B5B5
    font-size $fs-1
    font-weight $fw-semibold
    line-height 1.2

    &::before
      content ''
      position absolute
      top -1px
      right 0
      left 0
      width 60px
      height 2px
      margin auto
      background $c-primary

</style>
