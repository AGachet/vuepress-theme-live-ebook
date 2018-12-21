<template>
  <div class="chapter-navigation">
    <div class="chapter-navigation__block chapter-navigation__block--left">
      <RouterLink
        v-if="prevPage"
        :to="{ path: prevPage.path }"
        class="chapter-navigation__link"
      >
        <div class="chapter-navigation__wrapper">
          <div class="small-title chapter-navigation__direction">
            Previous
          </div>
          <div class="chapter-navigation__title">
            {{ prevPage.frontmatter.title }}
          </div>
          <div class="chapter-navigation__arrow chapter-navigation__arrow--left">
            <ArrowLeft />
          </div>
        </div>
        <div class="small-title chapter-navigation__chapter-number">
          {{ prevPage.frontmatter.chapter_number }}
        </div>
      </RouterLink>
    </div>

    <div class="chapter-navigation__block chapter-navigation__block--right">
      <RouterLink
        v-if="nextPage"
        :to="{ path: nextPage.path }"
        class="chapter-navigation__link"
      >
        <div class="chapter-navigation__wrapper">
          <div class="small-title chapter-navigation__direction">
            Next
          </div>
          <div class="chapter-navigation__title">
            {{ nextPage.frontmatter.title }}
          </div>
          <div class="chapter-navigation__arrow">
            <ArrowRight />
          </div>
        </div>
        <div class="small-title chapter-navigation__chapter-number">
          {{ nextPage.frontmatter.chapter_number }}
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@theme/assets/svg/arrow-left.svg'
import ArrowRight from '@theme/assets/svg/arrow-right.svg'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },

  props: {
    prevPage: {
      type: Object,
      default: null,
    },
    nextPage: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/shared'
$root = '.chapter-navigation'

{$root}
  display: flex;

  &__block
    width 50%;
    padding-top $base-sizing
    padding-bottom (1.5 * $base-sizing)

    @media (min-width: $screen-sm-min)
      padding-top (0.5 * $base-sizing)
      padding-bottom 6.38rem

    &--right
      padding-left (0.5 * $base-sizing)
      padding-right (0.5 * $base-sizing)

      @media (min-width: $screen-sm-min)
        padding-left $base-sizing
        padding-right (1.5 * $base-sizing)

    &--left
      padding-left (0.5 * $base-sizing)
      padding-right (0.5 * $base-sizing)
      text-align right

      @media (min-width: $screen-sm-min)
        padding-left (1.5 * $base-sizing)
        padding-right $base-sizing

  &__wrapper
    position relative

  &__direction
    font-weight $fw-bold
    text-transform uppercase

  &__chapter-number
    font-weight $fw-bold

  &__title
    position relative
    font-size $fs-2
    font-weight $fw-bold
    color $c-black

    @media (min-width: $screen-md-min)
      font-size $fs-6

  &__link
    display flex
    height 100%
    justify-content space-between
    flex-direction column

    {$root}__arrow
      background-color $c-white
      transition background-color 0.5s ease

    .svg-arrow g
      fill $c-black
      transition fill 0.5s ease

    &:hover
      text-decoration none

      {$root}__arrow
        background-color $c-primary

      .svg-arrow
        margin 0 auto

        g
          fill $white-color

  &__arrow
    display none

    @media (min-width: $screen-sm-min)
      pos absolute 1rem 1rem auto auto
      circle 2.33rem
      display flex
      align-items center
      justify-content center

    &--left
      left 1rem
      right auto

  &__arrow-left svg
    transform rotate(-180deg)
</style>
