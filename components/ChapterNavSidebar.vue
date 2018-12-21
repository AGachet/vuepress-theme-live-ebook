<template>
  <div class="sidebar-nav">
    <ExitButton />

    <ChapterNavArrows class="sidebar-nav__arrows" />

    <TransitionGroup
      name="chapter-list"
      tag="div"
      class="sidebar-nav__chapters"
    >
      <ChapterItem
        v-for="chapter in currentChapters"
        :key="chapter.frontmatter.chapter_number"
        :title="chapter.title"
        :number="chapter.frontmatter.chapter_number"
        :link="chapter.path"
        class="chapter-item"
      >
        <button
          v-if="isSingleChapterVisible"
          class="chapter-item__show-all"
          @click="showAllChapters"
        >
          Show all chapters
        </button>
      </ChapterItem>
    </TransitionGroup>

    <ChapterSections
      v-if="isSingleChapterVisible"
      :sections="chapterSections"
    >
      <ChapterSection
        class="chapter-section"
        slot="section"
        slot-scope="{ slug, title }"
        :slug="slug"
        :title="title"
      />
    </ChapterSections>

    <CompanyLogo class="sidebar-nav__company-logo" />
  </div>
</template>

<script>
import ExitButton from './ExitButton'
import ChapterNavArrows from './ChapterNavArrows'
import CompanyLogo from './CompanyLogo'
import ChapterItem from './ChapterItem'
import ChapterSections from './ChapterSections'
import ChapterSection from './ChapterSection'

export default {
  components: {
    ExitButton,
    ChapterNavArrows,
    CompanyLogo,
    ChapterItem,
    ChapterSections,
    ChapterSection,
  },

  data () {
    return {
      currentChapters: null,
    }
  },

  created () {
    this.currentChapters = [this.$page]
  },

  computed: {
    chapterSections () {
      return this.$page.headers.filter(header => header.level === 2)
    },

    chapterNumber () {
      return this.$page.frontmatter.chapter_number
    },

    isSingleChapterVisible () {
      return this.currentChapters.length === 1
    },
  },

  methods: {
    showAllChapters () {
      const index = this.$chapters.indexOf(this.$page)
      const left = [...this.$chapters]
      const right = left.splice(index)

      right.shift()

      left.reverse().forEach(item => this.currentChapters.unshift(item))
      right.forEach(item => this.currentChapters.push(item))
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.sidebar-nav
  position fixed
  top 0
  left 0
  bottom 0
  overflow-y auto
  padding (0.75 * $base-sizing) 15px 50px 55px

  &__arrows
    margin-top (1.5 * $base-sizing)

  &__chapters
    margin-top (0.5 * $base-sizing)

  &__chapter:not(:last-child)
    margin-bottom 50px

.chapter-item
  transition all 1s
  display block

  &__show-all
    display inline-block
    font-size $fs-0
    font-weight $fw-bold
    color $c-grey-light

.chapter-section
  margin 5px 0

.chapter-list-enter,
.chapter-list-leave-to
  opacity 0
  transform translateY(30px)

.chapter-list-leave-active
  position absolute
</style>
