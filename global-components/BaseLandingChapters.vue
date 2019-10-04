<template>
  <section class="landing-chapters">
    <div class="landing-chapters-container">
      <div class="landing-chapters__col landing-chapters__col--intro">
        <span
          class="subtitle"
        >
          {{ subtitle }}
        </span>
        <h1 class="title">
          {{ title }}
        </h1>
        <p
          class="intro"
        >
          {{ intro }}
        </p>
      </div>
      <div class="landing-chapters__col landing-chapters__col--chapters">
        <ChaptersBlocks :chapters="chapters" />
      </div>
    </div>
  </section>
</template>

<script>
import ChaptersBlocks from '@theme/components/ChaptersBlocks'
export default {
  components: {
    ChaptersBlocks,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: 'Chapters',
    },
    subtitle: {
      type: String,
      required: false,
      default: 'MENU',
    },
    intro: {
      type: String,
      required: false,
      default: '',
    },
  },

  computed: {
    chapters () {
      return this.$chapters.slice(0, 3)
    },
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'

.landing-chapters
  padding 180px 0 140px
  background: $c-white

.landing-chapters-container
  display flex
  @extend $landing-container

  .title
    margin 0
    font-size $fs-7
    text-align left
    line-height 1.16

  .subtitle
    display inline-block
    font-size 10px
    font-weight $fw-bold
    margin-bottom 30px
    line-height 1

  .intro
    max-width 166px
    margin 36px 0 0 0
    font-size $fs-2
    line-height 1.5

.landing-chapters__col
  &--intro
    flex 1

  &--chapters
    flex 3

</style>
