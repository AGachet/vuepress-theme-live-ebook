<template>
  <RouterLink
    aria-label="Read"
    :to="{ path: $chapters[0].path }"
    class="read-button"
  >
    <BookIcon class="read-button__icon" /> Read
</RouterLink>
</template>

<script>
import BookIcon from '@theme/assets/svg/book.svg'

export default {
  components: {
    BookIcon,
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.read-button
  display inline-flex
  align-items center
  padding: 15px 35px
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

  &__icon
    display inline-block
    width 14px
    margin-right 20px

  &:hover
    background lighten($c-primary, 5%)
</style>
