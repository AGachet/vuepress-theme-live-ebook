<template>
  <Carousel
    v-if="isMobile"
    class="recommendations-carousel"
    :slides-btn-count="recommendations.length"
  >
    <RecomendationBlock
      v-for="recommendation in recommendations"
      :key="recommendation.name"
      :recommendation="recommendation"
      class="recommendation-item recommendation-item--mobile"
    />
  </Carousel>
  <div
    v-else
    class="recommendations-items"
  >
    <RecomendationBlock
      v-for="recommendation in recommendations"
      :key="recommendation.name"
      :recommendation="recommendation"
      class="recommendation-item recommendation-item--desktop"
    />
  </div>
</template>

<script>

import RecomendationBlock from './RecommendationBlock'
import Carousel from './Carousel'

export default {
  components: {
    Carousel,
    RecomendationBlock,
  },

  props: {
    recommendations: {
      type: Array,
      required: true,
    },
  },

  data () {
    return {
      windowWidth: null,
    }
  },

  computed: {
    isMobile () {
      return this.windowWidth <= 992
    },
  },

  mounted () {
    this.getWindowInnerWidth()
    if (!this.$ssrContext) {
      window.addEventListener('resize', this.getWindowInnerWidth)
    }
  },

  beforeDestroy () {
    if (!this.$ssrContext) {
      window.removeEventListener('resize', this.getWindowInnerWidth)
    }
  },

  methods: {
    getWindowInnerWidth () {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.recommendations-items
    display flex
    justify-content space-between

.recommendations-carousel
  max-width 352px
  margin 0 auto

.recommendation-item--desktop
  & + &
    margin-left 30px

.recommendation-item--mobile
  max-width 312px
  width 100%
  margin 0 auto

</style>
