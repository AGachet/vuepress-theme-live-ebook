<template>
  <div class="c-quote">
    <div class="c-quote__text">
      {{ text }}
    </div>
    <div class="c-quote__author">
      <div class="c-quote__bullet">
        <QuoteIcon />
      </div>
      <div>{{ author }}</div>
    </div>
  </div>
</template>

<script>
import QuoteIcon from '@theme/assets/svg/quote.svg'

export default {
  components: {
    QuoteIcon,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.c-quote
  margin (1.278 * $base-sizing) 0
  padding-left 0
  text-align center

  @media (min-width: $screen-md-min)
    padding-left 6rem
    text-align left

  &__text
    font-family $ff-serif
    font-size $fs-5
    font-style italic

  &__author
    display flex
    align-items center
    justify-content center
    margin-top 0.5 * $base-sizing
    font-size $fs-1
    font-weight $fw-bold
    color $c-grey-light

    @media (min-width: $screen-md-min)
      justify-content flex-start

  &__bullet
    margin-right 1rem
</style>
