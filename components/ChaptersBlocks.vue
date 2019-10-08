<template>
  <ul class="chapters-container">
    <li
      v-for="chapter in chapters"
      :key="chapter.key"
      class="chapter"
    >
      <RouterLink
        class="chapter__content"
        :to="chapter.path"
      >
        <div class="chapter__header">
          <span class="chapter__number">
            {{ chapter.frontmatter.chapter_number }}
          </span>
          <div class="chapter__arrow">
            <ArrowRight />
          </div>
        </div>
        <h3 class="chapter__title">
          {{ chapter.frontmatter.title }}
        </h3>
        <ul class="sections">
          <li
            v-for="section in sections(chapter)"
            :key="section.key"
            class="section"
          >
            {{ section.title }}
          </li>
        </ul>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
import ArrowRight from '@theme/assets/svg/landing-arrow-right.svg'
export default {
  components: {
    ArrowRight,
  },

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
  $c-shadow = rgb(86,75,65)

.chapters-container
  display flex
  flex-direction column
  padding 0 36px

  @media (min-width: $screen-md-min)
    flex-direction row
    padding 0

.chapter,
.section
  padding 0

  &::before
    content none

.chapter
  flex 1
  margin-bottom 48px

  @media (min-width: $screen-md-min)
    margin-bottom 0
    margin-left 30px

    &:first-of-type
      margin-left 0

  &__content
    display flex
    flex-direction column
    height 100%
    padding: 38px 30px 58px 30px
    border-radius: 4px
    color: $c-landing-gray
    font-size $fs-4
    box-shadow 0 10px 20px 0 rgba($c-shadow, 0.05)
    transition: box-shadow ease .4s

    &:hover
      box-shadow 0 20px 40px 0 rgba($c-shadow, 0.3)

      .chapter__number,
      .chapter__arrow
        color $c-primary
        opacity 1
      .chapter__title,
      .section
       color: $c-landing-text

  &__header
    display flex
    justify-content space-between

  &__number
    margin-bottom 20px
    font-weight $fw-bold
    line-height 1
    opacity 0.5
    transition: opacity ease .2s, color ease .2s

  &__arrow
    width 20px
    height 14px
    color $c-primary
    opacity 0
    transition opacity ease .2s

  &__title
    margin 0
    font-weight $fw-semibold
    line-height 1.5
    transition: color ease .2s

.section
  margin-top 20px
  color $c-landing-gray
  font-size $fs-2
  line-height 1.5
  transition: color ease .2s

</style>
