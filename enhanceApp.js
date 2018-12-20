import BaseImage from '@theme/global-components/BaseImage.vue'
import BaseQA from '@theme/global-components/BaseQA.vue'
import BaseQuote from '@theme/global-components/BaseQuote.vue'
import BaseComparison from '@theme/global-components/BaseComparison.vue'

const dataMixin = {
  beforeRouteEnter (to, from, next) {
    if (to.path === '/') {
      next(vm => next({ path: vm.$chapters[0].path }))
    }

    next()
  },

  computed: {
    $chapters () {
      return this.$site.pages.filter(page =>
        page.frontmatter.layout === 'chapter'
      )
    },

    $navigation () {
      return [
        {
          text: 'Lorem',
          link: '',
          items: [
            {
              text: 'Ipsum',
              link: '',
            },
          ],
        },
      ]
    },
  },
}

export default ({ Vue, options }) => {
  Vue.mixin(dataMixin)
  Vue.component('BaseImage', BaseImage)
  Vue.component('BaseQA', BaseQA)
  Vue.component('BaseQuote', BaseQuote)
  Vue.component('BaseComparison', BaseComparison)
}
