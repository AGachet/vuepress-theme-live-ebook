<template>
  <div class="page-chapter">
    <ChapterNavMobile class="page-chapter__mobile-nav" />
    <ChapterNavSidebar class="page-chapter__sidebar-nav" />

    <article class="chapter-container">
      <ShareButtons />

      <div class="chapter">
        <div class="chapter__book-title">
          {{ $site.title }}
        </div>

        <Transition
          name="fade"
          appear
        >
          <div class="chapter__number">
            {{ $page.frontmatter.chapter_number }}
          </div>
        </Transition>

        <div class="chapter__content">
          <Transition
            name="fade-up"
            appear
          >
            <Content :key="$page.path" />
          </Transition>
        </div>
      </div>

      <div class="chapter__bottom-nav">
        <ChapterBottomNav
          :prev-page="prevPage"
          :next-page="nextPage"
        />
      </div>
    </article>
  </div>
</template>

<script>
import ChapterNavSidebar from '@theme/components/ChapterNavSidebar'
import ChapterNavMobile from '@theme/components/ChapterNavMobile'
import ChapterBottomNav from '@theme/components/ChapterBottomNav'
import ShareButtons from '@theme/components/ShareButtons'

const KEY_RIGHT = 39
const KEY_LEFT = 37

export default {
  components: {
    ChapterNavSidebar,
    ChapterNavMobile,
    ChapterBottomNav,
    ShareButtons,
  },

  created () {
    if (!this.$ssrContext) {
      document.body.classList.remove('no-scroll')
      window.addEventListener('keyup', this.handleKeyUp)
    }
  },

  mounted () {
    this.fixAnchorsOffset()
  },

  beforeDestroy () {
    if (!this.$ssrContext) {
      window.removeEventListener('keyup', this.handleKeyUp)
    }
  },

  computed: {
    currentPageIndex () {
      return this.$chapters.indexOf(this.$page)
    },

    prevPage () {
      return this.$chapters[this.currentPageIndex - 1] || null
    },

    nextPage () {
      return this.$chapters[this.currentPageIndex + 1] || null
    },
  },

  methods: {
    goToPrev () {
      if (this.prevPage) {
        this.$router.push({ path: this.prevPage.path })
      }
    },

    goToNext () {
      if (this.nextPage) {
        this.$router.push({ path: this.nextPage.path })
      }
    },

    handleKeyUp (event) {
      switch (event.keyCode) {
        case KEY_LEFT:
          return this.goToPrev()
        case KEY_RIGHT:
          return this.goToNext()
      }
    },

    // This method fixes offset for detecting sections on scroll
    // it should be removed once vuepress is updated to 1.x
    // and "headerOffsetTop" option is implemented
    // in @vuepress/plugin-active-header-links
    fixAnchorsOffset () {
      const headers = this.$el.querySelectorAll('.header-anchor')

      headers.forEach(header => {
        const { parentNode, outerHTML } = header
        parentNode.removeChild(header)

        const headerWrapperHTML = `
        <div class="fake-header-anchor">
          ${outerHTML}
        </div>
        ${parentNode.innerHTML}
      `.trim()

        parentNode.innerHTML = headerWrapperHTML
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/shared'

$sidebar-width = 25vw
$sidebar-max-width = 420px

.page-chapter
  @media (min-width $screen-md-min)
    display flex

  &__mobile-nav
    @media (min-width $screen-md-min)
      display none

  &__sidebar-nav
    display none
    width $sidebar-width
    border-right 1px solid $c-grey-very-light

    @media (min-width $screen-md-min)
      display block

    @media (min-width $screen-lg-min)
      max-width $sidebar-max-width

.chapter-container
  margin-top 60px

  @media (min-width $screen-md-min)
    max-width 970px
    flex 1
    margin-top 0
    margin-left $sidebar-width

  @media (min-width $screen-lg-min)
    margin-left $sidebar-max-width

.chapter
  padding ($base-sizing * 2) $base-sizing

  @media (min-width: $screen-sm-min)
    padding-right ($base-sizing * 2)
    padding-left ($base-sizing * 2)

  @media (min-width: $screen-md-min)
    padding-right ($base-sizing * 3)
    padding-bottom ($base-sizing * 7)
    padding-left ($base-sizing * 3)

  &__book-title
    margin-bottom $base-sizing
    font-size $fs-1
    font-weight $fw-semibold
    line-height $base-sizing
    text-align center
    text-transform uppercase
    color $c-grey-light

  &__number
    font-size $fs-5
    font-weight $fw-bold
    text-align center
    color $c-primary

  &__bottom-nav
    border-top 1px solid $c-gray-very-light
</style>
