<template>
  <a
    class="company-logo"
    :href="$site.themeConfig.company.url"
    :title="$site.themeConfig.company.name"
    target="_blank"
    rel="noopener"
  >
    <img
      :src="imgSrc"
      :alt="$site.themeConfig.company.name"
    >
  </a>
</template>

<script>
export default {
  computed: {
    imgSrc () {
      const path = this.$site.themeConfig.company
      const source = path.logoMobile ? this.$withBase(path.logoMobile) : this.$withBase(path.logo)

      return source
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.company-logo
  width 100%
</style>
