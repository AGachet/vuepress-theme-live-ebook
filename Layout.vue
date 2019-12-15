<template>
  <Component
    :is="$layout"
    :key="$page.path"
  />
</template>

<script>
import Home from '@theme/layouts/Home'
import Chapter from '@theme/layouts/Chapter'

export default {
  components: {
    /* eslint-disable vue/no-unused-components */
    Home,
    Chapter,
    /* eslint-enable vue/no-unused-components */
  },

  computed: {
    $layout () {
      const defaultLayout = 'chapter'
      const layout = this.$page.frontmatter.layout || defaultLayout
      return layout.toLowerCase()
    },
  },

  beforeMount () {
    const bodyScripts = this.$site.themeConfig.bodyScripts
    if (bodyScripts && bodyScripts.length) {
      bodyScripts.map(scriptConfig => this.createBodyScripts(scriptConfig))
    }
  },

  methods: {
    createBodyScripts (config) {
      const htmlElement = document.createElement(config[0])
      const elementAttributes = config[1]

      Object.keys(elementAttributes).map(attr => {
        if (attr === 'content') {
          htmlElement.innerHTML = elementAttributes[attr]
          return
        };

        htmlElement.setAttribute(attr, elementAttributes[attr])
      })

      document.body.appendChild(htmlElement)
    },
  },
}
</script>

<style lang="stylus" src="@theme/styles/app.styl" />
