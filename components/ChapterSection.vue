<template>
  <li class="chapter-section">
    <button
      class="chapter-section__btn"
      v-scroll-to="`#${slug}`"
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
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.chapter-section
  &__btn
    padding 1em 0
    text-align left
    font-size $fs-0
    font-weight $fw-semibold
    color $c-grey-light
    transition color 0.2s ease
</style>
