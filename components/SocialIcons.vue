<template>
  <div class="social-icons">
    <a
      v-for="(item, name) in $site.themeConfig.socials"
      :key="item"
      :href="item"
      :title="`Link to Netguru profile on ${name}`"
      target="_blank"
      rel="noreferrer"
      class="social-icon"
    >
      <FacebookLogo
        v-if="name === 'facebook'"
        class="social-icon__logo social-icon__logo--facebook"
      />
      <DribbleLogo
        v-if="name === 'dribbble'"
        class="social-icon__logo social-icon__logo--dribbble"
      />
      <BehanceLogo
        v-if="name === 'behance'"
        class="social-icon__logo social-icon__logo--behance"
      />
      <TwitterLogo
        v-if="name === 'twitter'"
        class="social-icon__logo social-icon__logo--twitter"
      />
    </a>
  </div>
</template>

<script>
import FacebookLogo from '@theme/assets/svg/socialIcons/logo-facebook.svg'
import DribbleLogo from '@theme/assets/svg/socialIcons/logo-dribbble.svg'
import BehanceLogo from '@theme/assets/svg/socialIcons/logo-behance.svg'
import TwitterLogo from '@theme/assets/svg/socialIcons/logo-twitter.svg'

export default {
  components: {
    FacebookLogo,
    DribbleLogo,
    BehanceLogo,
    TwitterLogo,
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.social-icon
  display inline-block
  // padding 10px
  height 20px
  margin 0 15px
  color $c-footer-socials
  transition color ease .2s

  &:hover
    color darken($c-footer-socials, 30%)
  // svg
  //   padding 0

.social-icon__logo
  height 18px

  &--behance
    height 12px
//     &--facebook
//     &--dribbble
  &--twitter
    height 17px

</style>
