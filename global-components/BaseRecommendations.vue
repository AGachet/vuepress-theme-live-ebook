<template>
  <section class="recommendations">
    <div class="recommendations-container">
      <div
        v-if="topImage"
        class="recommendations__image-holder recommendations__image-holder--top"
      >
        <BaseImage
          class="recommendations__image"
          :img="topImage.img"
          :alt="topImage.alt"
        />
      </div>
      <SectionIntro
        :title="title"
        :subtitle="subtitle"
        :intro="intro"
        align="center"
        class="intro"
      />
      <RecommendationsBlocks
        class="recommendations__blocks"
        :recommendations="recommendations"
      />
    </div>
    <div
      v-if="bottomImage"
      class="recommendations__image-holder recommendations__image-holder--bottom"
    >
      <BaseImage
        class="recommendations__image"
        :img="bottomImage.img"
        :alt="bottomImage.alt"
      />
    </div>
  </section>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage.vue'
import SectionIntro from '@theme/components/SectionIntro'
import RecommendationsBlocks from '@theme/components/RecommendationsBlocks'

export default {
  components: {
    BaseImage,
    SectionIntro,
    RecommendationsBlocks,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    intro: {
      type: String,
      required: false,
      default: '',
    },
    recommendations: {
      type: Array,
      required: true,
    },
    images: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  computed: {
    topImage () {
      return this.images && this.images.length && this.images[0]
    },
    bottomImage () {
      return this.images && this.images.length > 1 && this.images[1]
    },
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'

.recommendations
  position relative
  padding 80px 0 70px

  @media (min-width: $screen-md-min)
    padding 108px 0 118px

  &::after
    content ''
    position absolute
    right 0
    bottom 0
    left 0
    height 210px
    background $c-white
    z-index 10

  &__blocks
    z-index 30

  &__image-holder
    position absolute
    z-index -1

    &--top
      top -160px
      right -110px
      width 250px

    &--bottom
      left 0
      bottom 140px
      width 350px
      z-index 20

  &__image
    display none
    width 100%
    margin 0

    @media (min-width: $screen-sm-min)
      display block

.recommendations-container
  @extend $landing-container
  position relative
  z-index 30

.intro
  max-width 360px
  margin 0 auto 75px
  text-align center

  @media (min-width: $screen-md-min)
    text-align left
</style>
