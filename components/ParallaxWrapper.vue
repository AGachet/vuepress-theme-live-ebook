<template>
  <div>
    <slot />
  </div>
</template>
<script>
import Rellax from 'rellax'

export default {
  props: {
    config: {
      type: Object,
      required: false,
      default: () => {},
    },
    triggerElement: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      defaultConfig: {
        speed: 4,
        center: true,
        round: true,
      },
    }
  },

  mounted () {
    this.initParallax()
  },

  beforeDestroy () {
    this.destroyParallax()
  },

  methods: {
    initParallax () {
      const mergedConfig = { ...this.defaultConfig, ...this.config }
      this.parallax = new Rellax(this.triggerElement, mergedConfig)
    },

    destroyParallax () {
      this.parallax.destroy()
    },
  },

}
</script>
