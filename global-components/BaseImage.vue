<template>
  <img
    class="base-image"
    :src="src"
    :srcset="srcset"
    :alt="alt"
  >
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    img2x: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: '',
    },
  },

  computed: {
    src () {
      return this.$withBase(`/images/${this.img}`)
    },

    src2x () {
      return this.img2x && this.$withBase(`/images/${this.img2x}`)
    },

    srcset () {
      return this.img2x ? `${this.src} 1x, ${this.src2x} 2x` : ''
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.base-image
  display block
  margin $base-sizing auto
  max-width 100%
</style>
