<template>
  <ul>
    <li class="toc-h1 isActive">
      <RouterLink :to="{ path: chapter.path }">
        <span class="chapter-number">
          {{ chapter.frontmatter.chapter_number }}
        </span>
        {{ chapter.title }}
      </RouterLink>
    </li>
    <li
      class="toc-h2"
      :class="{
        isActive: section.slug === activeSection
      }"
      v-for="section in sections"
      :key="section.slug"
    >
      <a
        :href="`#${section.slug}`"
        @click.prevent="$emit('sectionChange', section.slug)"
      >
        {{ section.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chapter: {
      type: Object,
      required: true,
    },
  },

  computed: {
    sections () {
      return this.chapter.headers && this.chapter.headers.filter(chapter => chapter.level === 2)
    },
  },
}
</script>

<style scoped lang="stylus">
.toc-h1.isActive a
  color inherit

  .chapter-number
    color $c-primary

.toc-h2
  padding-left 50px

  &.isActive::before
    content ''
    position absolute
    left 27px
    width 1px
    height 100%
    display block
    background $c-primary
</style>
