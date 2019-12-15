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
      bodyScripts.forEach(scriptConfig => this.createBodyScripts(scriptConfig))
    }
  },

  methods: {
    createBodyScripts (config) {
      const { tagName, attributes, innerHTML } = config

      const htmlElement = document.createElement(tagName)
      const attributesKeys = Object.keys(attributes)

      if (attributesKeys.length) {
        attributesKeys.forEach(attr => {
          htmlElement.setAttribute(attr, attributes[attr])
        })
      }

      if (innerHTML && innerHTML.length) {
        htmlElement.innerHTML = innerHTML
      }

      document.body.appendChild(htmlElement)
    },
  },
}
</script>

<style lang="stylus" src="@theme/styles/app.styl" />
