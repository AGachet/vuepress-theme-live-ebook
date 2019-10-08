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
        <div class="landing-chapters__image-wrapper">
          <BaseImage
            class="landing-chapters__image"
            :img="img"
            :alt="imgAlt"
          />
        </div>
      </div>
      <div class="landing-chapters__col landing-chapters__col--chapters">
        <ChaptersBlocks :chapters="chapters" />
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage'
import ChaptersBlocks from '@theme/components/ChaptersBlocks'
import SectionIntro from '@theme/components/SectionIntro'

export default {
  components: {
    BaseImage,
    ChaptersBlocks,
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
      required: true,
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
  padding 180px 0 140px
  background: $c-white

  &__image-wrapper
    position relative
    width calc(100% - 65px)
    left -15px

  &__image
    margin 50px 0 0

.landing-chapters-container
  display flex
  @extend $landing-container

.intro
  max-width 166px

.landing-chapters__col
  &--intro
    flex 1

  &--chapters
    flex 3
    position relative
    z-index 20

</style>
