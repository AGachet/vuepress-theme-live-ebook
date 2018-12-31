<template>
  <div class="company-logo-container">
    <a
      class="company-logo"
      :href="$site.themeConfig.company.url"
      :title="$site.themeConfig.company.name"
      target="_blank"
      rel="noopener"
    >
      <img :src="$withBase($site.themeConfig.company.logo)">
    </a>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
.company-logo-container
  padding 2rem 0
</style>
