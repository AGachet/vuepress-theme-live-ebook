<template>
  <Component
    :is="isCurrent ? 'div' : 'router-link'"
    :to="!isCurrent && { path: link }"
    class="chapter-item"
    :class="{
      isActive: isCurrent
    }"
  >
    <div class="chapter-item__header">
      <span class="chapter-item__num">
        {{ number }}
      </span>
      <slot />
    </div>
    <h3 class="chapter-item__title">
      {{ title }}
    </h3>
  </Component>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
  },

  computed: {
    isCurrent () {
      return this.$page.frontmatter.chapter_number === this.number
    },

    itemComponent () {
      return this.isCurrent ? 'div' : 'router-link'
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.chapter-item
  text-decoration none

  &__header
    display flex
    align-items center
    margin-bottom 0.66667rem

  &__num
    position relative
    display inline-block
    margin 0 1rem 0 0
    font-size $fs-4
    font-weight $fw-bold
    color $c-grey-light
    transition color .25s ease

    .isActive &,
    .chapter-item:hover &
      color $c-primary

  &__title
    margin 0 0 2.778rem
    font-size $fs-2
    font-weight $fw-semibold
    line-height 2rem
    color $c-grey-light
    transition color .25s ease

    .isActive &,
    .chapter-item:hover &
      color $c-text
</style>
