<template>
  <div class="chapter-nav">
    <ChapterNavMobile class="chapter-nav__mobile" />
  </div>
</template>

<script>
import ChapterNavSidebar from './ChapterNavSidebar'
import ChapterNavMobile from './ChapterNavMobile'

export default {
  components: {
    ChapterNavSidebar,
    ChapterNavMobile,
  },
}
</script>

<style scoped lang="stylus">
.chapter-nav
  &__mobile
    @media (min-width: 600px)
      display block
</style>
