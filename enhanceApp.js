import VueScrollTo from 'vue-scrollto'
import BaseImage from '@theme/global-components/BaseImage.vue'
import BaseQA from '@theme/global-components/BaseQA.vue'
import BaseQuote from '@theme/global-components/BaseQuote.vue'
import BaseComparison from '@theme/global-components/BaseComparison.vue'
import BaseLandingIntro from '@theme/global-components/BaseLandingIntro.vue'
import BaseLandingChapters from '@theme/global-components/BaseLandingChapters.vue'
import BaseRecommendations from '@theme/global-components/BaseRecommendations.vue'
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
  Vue.component('BaseLandingIntro', BaseLandingIntro)
  Vue.component('BaseLandingChapters', BaseLandingChapters)
  Vue.component('BaseRecommendations', BaseRecommendations)

  Vue.filter('markdown', (value) => {
    return markdown.render(value)
  })
}
