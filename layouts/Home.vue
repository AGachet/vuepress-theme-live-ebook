<template>
  <div class="landing">
    <LandingNavbar
      class="landing__nav"
      :class="{'landing__nav--scrolled': isScrolled}"
    />
    <Content class="landing__content isLanding" />
    <LandingFooter class="landing__footer" />
  </div>
</template>

<script>
import Rellax from 'rellax'
import AOS from 'aos'
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
      scheduledAnimationFrame: false,
    }
  },

  created () {
    if (!this.$ssrContext) {
      window.addEventListener('scroll', this.handleScroll)
    }

    this.$nextTick(() => {
      this.initParallax()
      this.initAOS()
    })
  },

  destroyed () {
    if (!this.$ssrContext) {
      window.removeEventListener('scroll', this.handleScroll)
    }

    this.destroyParallax()
  },

  methods: {
    handleScroll () {
      if (!this.scheduledAnimationFrame) {
        requestAnimationFrame(() => this.setNavbarState())
      }
      this.scheduledAnimationFrame = true
    },

    setNavbarState () {
      const bodyScrollTop = document.documentElement.scrollTop || 0
      this.isScrolled = bodyScrollTop > this.offsetTop
      this.scheduledAnimationFrame = false
    },

    initParallax () {
      const parallaxTriggerElement = '.js-parallax'
      const config = {
        parallaxConfig: {
          speed: 2,
          center: true,
          round: true,
        },
      }

      this.parallax = new Rellax(parallaxTriggerElement, config)
    },

    destroyParallax () {
      this.parallax.destroy()
    },

    initAOS () {
      AOS.init({
        once: true,
        duration: 800,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/shared'
@require '../node_modules/aos/dist/aos.css'

.landing
  background $c-landing-bg

  &__content
    overflow-x hidden

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
