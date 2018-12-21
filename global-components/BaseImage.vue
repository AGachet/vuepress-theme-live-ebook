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
      return `/images/${this.img}`
    },

    srcset () {
      return this.img2x ? `/images/${this.img} 1x, /images/${this.img2x} 2x` : ''
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.base-image
  margin $base-sizing auto
  max-width 100% !important
  width initial !important
  height auto !important
</style>
