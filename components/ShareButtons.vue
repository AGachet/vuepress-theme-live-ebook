<template>
  <div class="share-buttons">
    <a
      v-if="twitter"
      :href="twitterHref"
      rel="nofollow"
      target="_blank"
      title="Share on Twitter"
      class="share-buttons__icon"
    >
      <TwitterIcon />
    </a>
  </div>
</template>

<script>
import TwitterIcon from '@theme/assets/svg/twitter.svg'

export default {
  components: {
    TwitterIcon,
  },

  computed: {
    twitter () {
      return this.$site.themeConfig.twitter
    },

    twitterHref () {
      return this.twitter && 'https://twitter.com/intent/tweet?' +
        `text=${this.$page.title}&` +
        `&url=${this.$page.path}` +
        `&via=${this.twitter}`
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.share-buttons
  padding-top (0.84 * $base-sizing)
  text-align right

  &__icon
    margin-right: 2.38rem
</style>
