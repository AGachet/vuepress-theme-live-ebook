<template>
  <div class="subnav-wrapper">
    <div class="col-xs-12 col-md-3 subnav">
      <ExitButton />

      <div class="subnav__chapters-container subnav__chapters-container--active">
        <div class="subnav__chapter-header-container">
          <div class="chapter-number">
            {{ chapterNumber }}
          </div>
          <!-- TODO -->
          <button class="chapter-toggle js-show-chapter-nav">
            Show all chapters
          </button>
        </div>
        <!-- TODO -->
        <div class="subnav__chapters-listing js-toc">
          <h5>{{ $page.title }}</h5>
          <ul>
            <li
              v-for="item in toc"
              :key="item.slug"
            >
              <a :href="`#${item.slug}`">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExitButton from './ExitButton'

export default {
  components: {
    ExitButton,
  },

  computed: {
    toc () {
      return this.$page.headers.filter(header => header.level === 2)
    },
    chapterNumber () {
      return this.$page.frontmatter.chapter_number
    },
  },
}
</script>

<style scoped lang="stylus">
</style>
