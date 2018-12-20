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

<style scoped lang="scss">
</style>
