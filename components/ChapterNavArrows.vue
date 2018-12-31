<template>
  <div class="arrows">
    <RouterLink
      aria-label="Previous chapter"
      :to="{ path: prevUrl }"
      class="arrow"
      :class="{
        isDisabled: !prevUrl
      }"
    >
      <ArrowLeft />
    </RouterLink>
    <RouterLink
      aria-label="Next chapter"
      :to="{ path: nextUrl }"
      class="arrow"
      :class="{
        isDisabled: !nextUrl
      }"
    >
      <ArrowRight />
    </RouterLink>
  </div>
</template>

<script>
import ArrowLeft from '@theme/assets/svg/arrow-left.svg'
import ArrowRight from '@theme/assets/svg/arrow-right.svg'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  computed: {
    currentPageIndex () {
      return this.$chapters.indexOf(this.$page)
    },

    prevPage () {
      return this.$chapters[this.currentPageIndex - 1] || null
    },

    nextPage () {
      return this.$chapters[this.currentPageIndex + 1] || null
    },

    prevUrl () {
      return this.prevPage ? this.prevPage.path : null
    },

    nextUrl () {
      return this.nextPage ? this.nextPage.path : null
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.arrows
  display: flex

.arrow
  color $c-grey-light

  &.isDisabled
    opacity .5
    pointer-events none

.arrow + .arrow
  margin-left .7rem
</style>
