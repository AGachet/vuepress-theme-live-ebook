<template>
  <a
    :href="$site.themeConfig.exitUrl"
    class="exit-button"
  >
    Exit e-book
  </a>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.exit-button
  font-size 14px
  font-weight 800
  color $c-primary
</style>
