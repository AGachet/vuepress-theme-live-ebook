<template>
  <div class="social-icons">
    <a
      v-for="(item, name) in $site.themeConfig.socials"
      :key="name"
      :href="createSocialLink(name, item)"
      :title="`Link to ${$site.themeConfig.company.name} profile on ${name}`"
      target="_blank"
      rel="noreferrer"
      class="social-icon"
    >
      <Component
        :is="iconFor(name)"
        class="social-icon__logo"
        :class="`social-icon__logo--${name}`"
      />
    </a>
  </div>
</template>

<script>
import FacebookLogo from '@theme/assets/svg/socialIcons/logo-facebook.svg'
import DribbleLogo from '@theme/assets/svg/socialIcons/logo-dribbble.svg'
import BehanceLogo from '@theme/assets/svg/socialIcons/logo-behance.svg'
import TwitterLogo from '@theme/assets/svg/socialIcons/logo-twitter.svg'

const socialPlatforms = {
  facebook: {
    url: 'https://www.facebook.com/',
    icon: FacebookLogo,
  },
  twitter: {
    url: 'https://twitter.com/',
    icon: TwitterLogo,
  },
  dribbble: {
    url: 'https://dribbble.com/',
    icon: DribbleLogo,
  },
  behance: {
    url: 'https://www.behance.net/',
    icon: BehanceLogo,
  },
}

export default {
  computed: {
    iconFor () {
      return platformName => socialPlatforms[platformName] && socialPlatforms[platformName].icon
    },
  },
  methods: {
    createSocialLink (platformName, accountName) {
      return socialPlatforms[platformName] && socialPlatforms[platformName].url + accountName
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.social-icon
  display inline-block
  height 20px
  margin 0 15px
  color $c-footer-socials
  transition color ease .2s

  &:first-child
    margin-left 0

    @media (min-width: $screen-md-min)
      margin-left 15px

  &:hover
    color darken($c-footer-socials, 30%)

.social-icon__logo
  height 18px

  &--behance
    height 12px

  &--twitter
    height 17px

</style>
