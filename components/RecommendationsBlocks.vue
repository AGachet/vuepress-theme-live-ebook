<template>
  <div>
    <SliderTest
      v-if="isMobile"
      class="recommendations__slider"
    >
      <RecomendationBlock
        v-for="recommendation in recommendations"
        :key="recommendation.name"
        :recommendation="recommendation"
        class="recommendation-item recommendation-item--mobile"
      />
    </SliderTest>
    <div
      v-else
      class="recommendations__items"
    >
      <RecomendationBlock
        v-for="recommendation in recommendations"
        :key="recommendation.name"
        :recommendation="recommendation"
        class="recommendation-item recommendation-item--desktop"
      />
    </div>
  </div>
</template>

<script>

import RecomendationBlock from './RecommendationBlock'
import SliderTest from './SliderTest'

export default {
  components: {
    SliderTest,
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
    window.addEventListener('resize', this.getWindowInnerWidth)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowInnerWidth)
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

.recommendations__items
    display flex
    justify-content space-between

.recommendations__slider
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
