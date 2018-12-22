<template>
  <div>
    <header class="header">
      <button
        class="header__burger"
        @click="isOpen = !isOpen"
      />
      <div class="header__title">
        <span>
          {{ $page.frontmatter.chapter_number }}
        </span>
        {{ $page.title }}
      </div>
      <ChapterNavArrows class="header__arrows" />
    </header>
    <ChapterNavMobileSidebar
      :is-open="isOpen"
      @close="isOpen = false"
    />
  </div>
</template>

<script>
import ChapterNavArrows from './ChapterNavArrows'
import ChapterNavMobileSidebar from './ChapterNavMobileSidebar'

export default {
  components: {
    ChapterNavArrows,
    ChapterNavMobileSidebar,
  },

  data () {
    return {
      isOpen: false,
    }
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.header
  display flex
  align-items center
  justify-content space-between
  position fixed
  top 0
  left 0
  right 0
  padding 0 30px
  height 60px
  z-index 1000
  background #fff
  box-shadow 0 4px 8px rgba(0,0,0,.12)

.header__burger
  width 32px
  height 30px
  position relative
  left -8px
  padding 0
  border 0
  background none
  outline none
  &::before
    content ''
    position absolute
    top 8px
    left 8px
    right 8px
    height 2px
    background-color #000
    box-shadow 0 6px 0 0 #000, 0 12px 0 0 #000

.header__title
  font-size 14px
  font-weight 600
  color #000

  span
    margin-right 1rem
    color $c-primary
    font-weight 800
</style>
