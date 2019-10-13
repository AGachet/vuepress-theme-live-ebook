<template>
  <a
    class="company-logo"
    :href="$site.themeConfig.company.url"
    :title="$site.themeConfig.company.name"
    target="_blank"
    rel="noopener"
  >
    <img
      :src="$withBase($site.themeConfig.company.logo)"
      :alt="$site.themeConfig.company.name"
    >
  </a>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.company-logo
  width 100%
</style>
