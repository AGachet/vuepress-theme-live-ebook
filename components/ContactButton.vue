<template>
  <a
    v-if="contactUrl"
    :href="contactUrl"
    class="contact-button"
  >
    Contact
  </a>
</template>

<script>
export default {
  computed: {
    contactUrl () {
      return this.$site.themeConfig.contactUrl
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.contact-button
  color $c-primary
  font-size $fs-1
  font-weight $fw-semibold
  line-height 1
  transition color ease .2s

  &:hover
    color lighten($c-primary, 5%)
</style>
