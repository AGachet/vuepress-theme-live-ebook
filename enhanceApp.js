import VueScrollTo from 'vue-scrollto'
import BaseImage from '@theme/global-components/BaseImage.vue'
import BaseQA from '@theme/global-components/BaseQA.vue'
import BaseQuote from '@theme/global-components/BaseQuote.vue'
import BaseComparison from '@theme/global-components/BaseComparison.vue'
import md from 'markdown-it'

const markdown = md({
  html: true,
  linkify: true,
  typographer: true,
})

const dataMixin = {
  beforeRouteEnter (to, from, next) {
    if (to.path === '/') {
      next(vm => next({ path: vm.$chapters[0].path }))
    }

    next()
  },

  computed: {
    $chapters () {
      return this.$site.pages && this.$site.pages.filter(page =>
        page.frontmatter.layout === 'chapter' &&
        (
          typeof page.frontmatter.published === 'undefined' ||
          page.frontmatter.published
        )
      )
    },
  },
}

export default ({ Vue, options }) => {
  Vue.use(VueScrollTo, {
    offset: -30,
  })
  Vue.mixin(dataMixin)
  Vue.component('BaseImage', BaseImage)
  Vue.component('BaseQA', BaseQA)
  Vue.component('BaseQuote', BaseQuote)
  Vue.component('BaseComparison', BaseComparison)

  Vue.filter('markdown', (value) => {
    return markdown.render(value)
  })
}
