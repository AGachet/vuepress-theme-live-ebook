<template>
  <div
    class="sidebar-container"
    :class="{ isOpen }"
  >
    <div
      class="backdrop"
      @click="$emit('close')"
    />

    <div class="sidebar">
      <button
        class="close-nav"
        aria-label="Close navigation"
        @click="$emit('close')"
      />

      <div class="sidebar-content">
        <ul>
          <li
            class="toc-h1"
            :class="{
              isActive: chapter.frontmatter.chapter_number === $page.frontmatter.chapter_number
            }"
            v-for="chapter in $chapters"
            :key="chapter.frontmatter.chapter_number"
          >
            <ChapterMobileSections
              v-if="chapter.frontmatter.chapter_number === $page.frontmatter.chapter_number"
              :chapter="chapter"
              :active-section="activeSection"
              @sectionChange="handleSectionChange"
            />
            <RouterLink
              v-else
              :to="{ path: chapter.path }"
            >
              <span class="chapter-number">
                {{ chapter.frontmatter.chapter_number }}
              </span>
              {{ chapter.title }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <ExitButton class="sidebar__exit-button" />

      <CompanyLogo class="sidebar__logo" />
    </div>
  </div>
</template>

<script>
import ExitButton from './ExitButton'
import CompanyLogo from './CompanyLogo'
import ChapterMobileSections from './ChapterMobileSections'

const KEY_ESCAPE = 27

export default {
  components: {
    ExitButton,
    CompanyLogo,
    ChapterMobileSections,
  },

  props: {
    isOpen: {
      type: Boolean,
    },
  },

  data () {
    return {
      activeSection: null,
    }
  },

  watch: {
    isOpen (newVal, oldVal) {
      if (newVal) {
        document.body.classList.add('no-scroll')
      } else {
        document.body.classList.remove('no-scroll')
      }
    },
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

  methods: {
    handleKeyUp (event) {
      if (this.isOpen && event.keyCode === KEY_ESCAPE) {
        this.$emit('close')
      }
    },

    handleSectionChange (slug) {
      document.body.classList.remove('no-scroll')
      this.activeSection = slug
      this.$emit('close')
      this.$scrollTo(`#${slug}`, 500, {
        offset: -80,
      })
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.sidebar-container
  position fixed
  z-index 1000
  top 0
  bottom 0
  width 100%
  transform translateX(-100%)
  transition transform 0.25s ease

  &.isOpen
    transform translateX(0)

.backdrop
  position absolute
  top 0
  right 0
  bottom 0
  left 0

.sidebar
  position relative
  width 90%
  height 100%
  padding 70px 32px 50px
  overflow-y auto
  background $c-white
  box-shadow 0 0 25px rgba(0, 0, 0, 0.12)

  @media (min-width $screen-sm-min)
    width 360px

  &__exit-button

  &__logo
    margin-top 20px

.sidebar-content
  >>> ul
    margin 0
    padding-left 0
    list-style-type none

  >>> li
    position relative

  >>> a
    display block
    font-size $fs-1
    font-weight $fw-semibold
    line-height $base-sizing
    color $c-grey-light
    margin-bottom 1.3rem

    &:hover
      text-decoration none

    .chapter-number
      color $c-grey-light
      font-size $fs-1

>>> .chapter-number
  position relative
  display inline-block
  margin 0 1rem 0 0
  font-size $fs-4
  font-weight $fw-bold
  color $c-primary

.close-nav
  width: 32px
  height 32px
  position absolute
  top 28px
  left 24px
  display flex
  justify-content center
  align-items center
  border 0
  background none
  outline none

  &::before,
  &::after
    content ''
    width 16px
    height 2px
    position absolute
    margin auto
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    transform rotate(45deg)

  &::after
    transform rotate(-45deg)
</style>
