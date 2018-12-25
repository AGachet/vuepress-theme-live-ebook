<template>
  <li
    class="chapter-section"
    :class="{ isActive }"
  >
    <button
      class="chapter-section__btn"
      v-scroll-to="hash"
    >
      {{ title }}
    </button>
  </li>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },

  computed: {
    hash () {
      return `#${this.slug}`
    },

    isActive () {
      return this.hash === this.$route.hash
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.chapter-section
  position relative

  &__btn
    display block
    padding 1em 0
    text-align left
    font-size $fs-0
    font-weight $fw-semibold
    color $c-grey-light
    transition color 0.2s ease
    cursor pointer

    &:hover,
    .isActive &
      color $c-black

  &.isActive::before
    content ''
    position absolute
    top 5px
    right 0
    bottom 5px
    width 1px
    background-color $c-primary
</style>
