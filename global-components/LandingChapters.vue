<template>
  <section class="landing-chapters">
    <div class="landing-chapters-container">
      <div class="landing-chapters__col landing-chapters__col--intro">
        <SectionIntro
          class="intro"
          :title="title"
          :subtitle="subtitle"
          :intro="intro"
        />
        <div
          v-if="img"
          class="image-wrapper"
        >
          <BaseImage
            class="image"
            :img="img"
            :alt="imgAlt"
          />
        </div>
      </div>
      <div class="landing-chapters__col landing-chapters__col--chapters">
        <ChapterBlocks :chapters="chapters" />
      </div>
      <ReadButton class="button" />
    </div>
  </section>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage'
import ReadButton from '@theme/components/ReadButton'
import ChapterBlocks from '@theme/components/ChapterBlocks'
import SectionIntro from '@theme/components/SectionIntro'

export default {
  components: {
    BaseImage,
    ReadButton,
    ChapterBlocks,
    SectionIntro,
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
    img: {
      type: String,
      required: false,
    },
    imgAlt: {
      type: String,
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
  padding 94px 0 50px
  background: $c-white

  @media (min-width: $screen-md-min)
    padding 180px 0 140px

.landing-chapters-container
  @extend $landing-container
  display flex
  flex-direction column
  align-items center

  @media (min-width: $screen-md-min)
    flex-direction row
    align-items flex-start

.landing-chapters__col
  &--intro
    flex 1
    margin-bottom 80px

  @media (min-width: $screen-md-min)
    &--intro
      flex 1
      margin-bottom 0

    &--chapters
      flex 3
      position relative
      z-index 20

.image-wrapper
  position relative
  width calc(100% - 65px)
  left -15px

.image
  display none

  @media (min-width: $screen-md-min)
    display block
    margin 50px 0 0

.button
  margin-top 5px

  @media (min-width: $screen-sm-min)
    display none

.intro
  max-width 270px
  text-align center

  @media (min-width: $screen-md-min)
    max-width 166px
    text-align left

</style>
