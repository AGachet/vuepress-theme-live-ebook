<template>
  <div class="recommendation-item">
    <div class="recommendation-item__content">
      <div class="avatar">
        <BaseImage
          class="avatar__photo"
          :img="recommendation.photo"
        />
        <QuotationMark class="avatar__quotation-mark" />
      </div>
      <span class="name">
        {{ recommendation.name }}
      </span>
      <h3 class="quote">
        {{ recommendation.recommendation }}
      </h3>
    </div>
    <div class="footer">
      {{ recommendation.position }}
    </div>
  </div>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage.vue'
import QuotationMark from '@theme/assets/svg/quotation_mark.svg'

export default {
  components: {
    BaseImage,
    QuotationMark,
  },
  props: {
    recommendation: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.recommendation-item
  width 100%
  flex: 1
  border-radius 4px
  background $c-white
  text-align center
  box-shadow 0 10px 20px 0 rgba(#74675B, .06)

  &__content
    height 346px
    padding 50px 30px 40px

    @media (min-width: $screen-md-min)
      height auto

.avatar
  position relative
  width 80px
  height 80px
  margin 0 auto 16px
  overflow hidden
  color $c-primary

  &__photo
    margin 0
    border-radius 50%

  &__quotation-mark
    position absolute
    right 0
    bottom 0
    width 28px
    height 28px

.name
  color $c-landing-gray
  font-size 10px
  font-weight $fw-bold
  letter-spacing 0.2em
  line-height 1.3
  text-transform uppercase

.quote
  margin 20px 0 10px
  color $c-landing-text
  font-size $fs-4
  font-weight $fw-semibold
  line-height 1.3

.footer
  position relative
  display flex
  flex-direction column
  justify-content center
  height 94px
  padding 10px 30px
  border-top 1px solid $c-footer-border
  color lighten($c-landing-gray, 35%)
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
