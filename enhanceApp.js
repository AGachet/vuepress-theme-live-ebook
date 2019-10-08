import VueScrollTo from 'vue-scrollto'
import BaseImage from '@theme/global-components/BaseImage.vue'
import BaseQA from '@theme/global-components/BaseQA.vue'
import BaseQuote from '@theme/global-components/BaseQuote.vue'
import BaseComparison from '@theme/global-components/BaseComparison.vue'
import LandingHeader from '@theme/global-components/LandingHeader.vue'
import LandingChapters from '@theme/global-components/LandingChapters.vue'
import LandingRecommendations from '@theme/global-components/LandingRecommendations.vue'
import md from 'markdown-it'

const markdown = md({
  html: true,
  linkify: true,
  typographer: true,
})

const dataMixin = {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$site.themeConfig.redirectToFirstSection && to.path === '/') {
        return next({ path: vm.$chapters[0].path })
      }
      return next()
    })
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
  Vue.component('LandingHeader', LandingHeader)
  Vue.component('LandingChapters', LandingChapters)
  Vue.component('LandingRecommendations', LandingRecommendations)

  Vue.filter('markdown', (value) => {
    return markdown.render(value)
  })
}
