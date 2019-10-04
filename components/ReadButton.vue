<template>
  <RouterLink
    aria-label="Read"
    :to="{ path: $chapters[0].path }"
    class="read-button"
  >
    Read
  </RouterLink>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.read-button
  display inline-block
  padding: 14px 40px
  border-radius 100px
  background $c-primary
  box-shadow 0 8px 20px 0 lighten($c-primary, 30%)
  color $c-white
  font-size $fs-1
  font-weight $fw-bold
  line-height 1
  letter-spacing 2.2px
  text-transform uppercase
  transition background ease .2s

  &.read-button
    color $c-white

  &:hover
    background lighten($c-primary, 5%)
</style>
