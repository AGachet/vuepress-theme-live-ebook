<template>
  <div class="page-chapter">
    <ChapterNav class="page-chapter__nav" />

    <article class="col-xs-12 col-md-8 col-md-offset-3 chapter-container">
      <ShareButtons />

      <div class="chapter">
        <div class="small-title chapter__book-title">
          {{ $site.title }}
        </div>

        <div class="chapter__number">
          {{ $page.frontmatter.chapter_number }}
        </div>

        <div class="chapter__content">
          <Content :key="$page.path" />
        </div>
      </div>
    </article>

    <div class="bottom-nav-container">
      <ChapterBottomNav
        :prev-page="prevPage"
        :next-page="nextPage"
      />
    </div>
  </div>
</template>

<script>
import ChapterNav from '@theme/components/ChapterNav'
import ChapterBottomNav from '@theme/components/ChapterBottomNav'
import ShareButtons from '@theme/components/ShareButtons'

const KEY_RIGHT = 39
const KEY_LEFT = 37

export default {
  components: {
    ChapterNav,
    ChapterBottomNav,
    ShareButtons,
  },

  created () {
    if (typeof window !== 'undefined') {
      window.addEventListener('keyup', this.handleKeyUp)
    }
  },

  beforeDestroy () {
    if (typeof window !== 'undefined') {
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
  },
}
</script>
