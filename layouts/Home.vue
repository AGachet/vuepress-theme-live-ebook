<template>
  <div class="landing">
    <LandingNav class="landing__nav" />
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
}
</script>

<style lang="stylus" scoped>
  @require '~@theme/styles/shared'

  .landing
    background $c-landing-bg

    &__nav
      max-width 1520px
      padding: 0 20px;
      margin: 0 auto

  // .landing__content.landing__content
  //   margin-top 0
</style>
