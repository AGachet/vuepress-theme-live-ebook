<template>
  <ul class="chapters-container">
    <li
      class="chapter-item"
      v-for="chapter in chapters"
      :key="chapter.key"
    >
      <RouterLink
        class="chapter-item__content"
        :to="chapter.path"
      >
        {{ chapter.frontmatter.title }}
        <ul class="sections">
          <li
            class="section-item"
            v-for="section in sections(chapter)"
            :key="section.key"
          >
            {{ section.title }}
          </li>
        </ul>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chapters: {
      type: Array,
      required: true,
    },
  },

  computed: {
    sections () {
      return chapter => chapter.headers && chapter.headers.filter(chapter => chapter.level === 2)
    },
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'

.chapters-container
  display flex
  flex-wrap: wrap

  .chapter-item,
  .section-item
    padding 0

    &::before
      content none

.chapter-item
  flex 1
  margin-left 30px

  &:first-of-type
    margin-left 0

  &__content
    display block
    height 100%
    padding: 38px 30px
    border-radius: 4px
    box-shadow 0 10px 20px 0 rgba(86,75,65,0.05)
    transition: box-shadow ease .4s

    &:hover
      box-shadow 0 20px 40px 0 rgba(86,75,65,0.3)

</style>
