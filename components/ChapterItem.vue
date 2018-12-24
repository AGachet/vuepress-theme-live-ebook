<template>
  <div
    class="chapter-item"
    :class="{
      isActive
    }"
    @click="$emit('click')"
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
  </div>
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
    isActive: {
      type: Boolean,
    },
  },

  methods: {
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
