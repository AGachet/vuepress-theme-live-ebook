<template>
  <div class="sidebar-nav">
    <div
      class="sidebar-nav__content"
      :class="{ isSingleChapterVisible }"
    >
      <ExitButton />

      <div class="sidebar-nav__arrows">
        <Transition name="fade-right">
          <ChapterNavArrows v-if="isSingleChapterVisible" />
        </Transition>
      </div>

      <TransitionGroup
        name="chapter-list"
        tag="div"
        class="sidebar-nav__chapters"
      >
        <ChapterItem
          v-for="chapter in currentChapters"
          :key="chapter.frontmatter.chapter_number"
          class="chapter-item"
          :title="chapter.title"
          :number="chapter.frontmatter.chapter_number"
          :is-active="isActive(chapter)"
          @click="handleChapterClick(chapter)"
        >
          <Transition name="fade">
            <button
              v-if="isSingleChapterVisible"
              class="chapter-item__show-all"
            >
              Show all chapters
            </button>
          </Transition>
        </ChapterItem>
      </TransitionGroup>

      <Transition
        name="fade-right"
        appear
        appear-class="fade-right-appear"
        appear-class-active="fade-right-appear-active"
      >
        <ChapterSections
          v-if="isSingleChapterVisible && !sectionsHidden"
          class="chapter-sections"
          :sections="chapterSections"
        >
          <ChapterSection
            slot="section"
            slot-scope="{ slug, title, hash }"
            class="chapter-section sidebar-link"
            :slug="slug"
            :title="title"
            :hash.prop="hash"
          />
        </ChapterSections>
      </Transition>

      <CompanyLogo class="sidebar-nav__company-logo" />
    </div>
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
      sectionsHidden: false,
    }
  },

  computed: {
    chapterSections () {
      return this.$page.headers && this.$page.headers.filter(header => header.level === 2)
    },

    isSingleChapterVisible () {
      return this.currentChapters.length === 1
    },
  },

  created () {
    this.activeChapter = this.$page
    this.currentChapters = [this.$page]
  },

  methods: {
    handleChapterClick (chapter) {
      return this.isSingleChapterVisible
        ? this.showAllChapters()
        : this.goToChapter(chapter)
    },

    showAllChapters () {
      const index = this.$chapters.indexOf(this.activeChapter)
      const left = [...this.$chapters]
      const right = left.splice(index)

      right.shift()

      left.reverse().forEach(item => this.currentChapters.unshift(item))
      right.forEach(item => this.currentChapters.push(item))
    },

    goToChapter (chapter) {
      const index = this.currentChapters.indexOf(chapter)

      this.sectionsHidden = true

      this.currentChapters.splice(index + 1)
      this.currentChapters.splice(0, this.currentChapters.length - 1)

      this.activeChapter = chapter

      setTimeout(() => {
        this.$router.push({ path: chapter.path })
        this.sectionsHidden = false // in case of the same path
      }, 500)
    },

    isActive (chapter) {
      return chapter.path === this.activeChapter.path
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

  &__content
    position relative
    min-height 100%
    padding (0.75 * $base-sizing) 15px 6rem 55px

  &__arrows
    margin-top (1.5 * $base-sizing)
    height 18px

  &__chapters
    margin-top (0.5 * $base-sizing)

  &__chapter:not(:last-child)
    margin-bottom 50px

  &__company-logo
    position absolute
    bottom 0
    max-width 106px
    padding 2rem 0

.chapter-sections
  position absolute
  width 100%
  top 250px
  padding 0 70px 0 0

  &.fade-right-leave-active
    transition-delay 0.25s

.chapter-item
  transition all 1s
  display block
  cursor pointer

  &__show-all
    display inline-block
    font-size $fs-0
    font-weight $fw-bold
    color $c-grey-light
    cursor pointer

.chapter-section
  margin 5px 0

// Animation: chapter-list

.chapter-list-enter-active
  transition transform 0.5s $base-easing, opacity 0.5s
  transition-delay 0.5s

.chapter-list-leave-active
  position absolute
  transition transform 0s $base-easing, opacity 0s

.chapter-list-enter,
.chapter-list-leave-to
  opacity 0
  transform translateY(30px)

.chapter-list-move
  transition-duration 0.25s
  transition-delay 0.5s

  &.chapter-list-leave-active
    transition-delay 0s
    transition-duration 0s

  .isSingleChapterVisible &:not(.chapter-list-leave-active).isActive
    transition-duration 0.5s
    transition-delay 0s

// Animation: fade-right

.fade-right-leave-active
  transition transform 0.25s ease, opacity .25s
  transition-delay 0s

.fade-right-enter-active
  transition transform 0.25s ease, opacity .25s
  transition-delay 0.25s

.fade-right-enter,
.fade-right-leave-to
  opacity 0
  transform translateX(-100px)

// Animation: fade-right-appear

.fade-right-appear-active
  transition transform 0.25s $base-easing, opacity .25s

.fade-right-appear
  opacity 0
  transform translateX(-100px)

</style>
