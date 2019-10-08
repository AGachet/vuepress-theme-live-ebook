<template>
  <div class="landing">
    <LandingNav
      class="landing__nav"
      :class="{'landing__nav--scrolled': isScrolled}"
    />
    <Content class="landing__content" />
    <LandingFooter class="landing__footer" />
  </div>
</template>

<script>
import LandingNav from '@theme/components/LandingNav'
import LandingFooter from '@theme/components/LandingFooter'

export default {

  components: {
    LandingNav,
    LandingFooter,
  },

  data () {
    return {
      offsetTop: 60,
      isScrolled: false,
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
    position sticky
    top 0
    padding 0 20px
    background $c-landing-bg
    border-bottom 1px solid transparent
    z-index 40
    transition background-color ease .3s

    &--scrolled
      background $c-white
      border-color darken($c-landing-bg, 10%)
</style>
