<template>
  <div>
    <div class="recommendations-items lol">
      <slot />
    </div>
  </div>
</template>

<script>
import Siema from 'siema'

export default {
  data () {
    return {
      defaultSettings: {
        selector: '.lol',
        duration: 200,
        easing: 'ease-out',
        loop: true,
      },
    }
  },

  mounted () {
    this.init()
  },

  beforeDestroy () {
    this.destroy()
  },

  methods: {
    init () {
      this.siema = new Siema(this.defaultSettings)
    },
    destroy () {
      this.siema.destroy(true)
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.recommendations-items
  display block
  overflow hidden
</style>
