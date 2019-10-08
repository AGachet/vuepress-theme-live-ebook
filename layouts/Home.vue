<template>
  <div class="landing">
    <LandingNavbar
      class="landing__nav"
      :class="{'landing__nav--scrolled': isScrolled}"
    />
    <Content class="landing__content" />
    <LandingFooter class="landing__footer" />
  </div>
</template>

<script>
import LandingNavbar from '@theme/components/LandingNavbar'
import LandingFooter from '@theme/components/LandingFooter'

export default {

  components: {
    LandingNavbar,
    LandingFooter,
  },

  data () {
    return {
      offsetTop: 60,
      isScrolled: false,
    }
  },

  created () {
    if (!this.$ssrContext) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  destroyed () {
    if (!this.$ssrContext) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll () {
      const bodyScrollTop = document.documentElement.scrollTop || 0

      if (bodyScrollTop > this.offsetTop) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/shared'

.landing
  background $c-landing-bg

  &__nav
    padding 0 30px
    background $c-landing-bg
    border-bottom 1px solid transparent
    z-index 40

    @media (min-width: $screen-sm-min)
      position sticky
      top 0
      padding 0 20px
      transition background-color ease .3s

      &--scrolled
        background $c-white
        border-color darken($c-landing-bg, 10%)
</style>
