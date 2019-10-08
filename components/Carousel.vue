<template>
  <div class="carousel">
    <div class="carousel__items-container js-trigger-carousel">
      <slot />
    </div>
    <div
      v-if="slidesBtnCount"
      class="carousel__controls"
    >
      <button
        v-for="(btn, index) in slidesBtnCount"
        :key="btn"
        :aria-label="`Go to element number ${btn}`"
        class="carousel__control"
        :class="{'carousel__control--active': index === currentSlide}"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>

<script>
import Siema from 'siema'

export default {
  props: {
    slidesBtnCount: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data () {
    return {
      currentSlide: 0,
      defaultSettings: {
        selector: '.js-trigger-carousel',
        duration: 200,
        easing: 'ease-out',
        loop: true,
      },
    }
  },

  mounted () {
    this.init()
  },

  beforeDestroy () {
    this.destroy()
  },

  methods: {
    init () {
      this.carousel = new Siema(this.defaultSettings)
    },
    destroy () {
      this.carousel.destroy(true)
    },
    goToSlide (index) {
      this.carousel.goTo(index, () => this.markCurrentSlide(index))
    },
    markCurrentSlide (index) {
      this.currentSlide = index
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.carousel__items-container
  display block
  overflow hidden
  margin-top -40px
  padding 40px 0

.carousel__controls
  display flex
  justify-content center
  margin-top -5px

.carousel__control
  position relative
  display block
  width 18px
  height 18px
  margin 6px
  cursor pointer

  &::before
    content ''
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 12px
    height 12px
    margin auto
    border-radius 50%
    border 1px solid $c-primary
    transition background ease .3s

  &:hover,
  &--active
    &::before
      background $c-primary
</style>
