<template>
  <section class="landing-intro-container">
    <div class="landing-intro">
      <div class="landing-intro__col landing-intro__col--text">
        <div class="landing-intro__text-block">
          <span
            v-if="subtitle"
            class="subtitle"
          >
            {{ subtitle }}
          </span>
          <h1 class="title">
            {{ title }}
          </h1>
          <p
            v-if="intro"
            class="intro"
          >
            {{ intro }}
          </p>
          <ReadButton class="read-btn" />
        </div>
        <div
          v-if="tag"
          class="landing-intro__text-block"
        >
          <span class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="landing-intro__col landing-intro__col--image">
        <div class="landing-intro__image-wrapper">
          <BaseImage
            class="landing-intro__image"
            :img="imgDesktop.img"
            :img2x="imgDesktop.img2x"
            :alt="imgDesktop.imgAlt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseImage from '@theme/global-components/BaseImage'
import ReadButton from '@theme/components/ReadButton'

export default {
  components: {
    BaseImage,
    ReadButton,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    intro: {
      type: String,
      required: false,
      default: '',
    },
    tag: {
      type: String,
      required: false,
      default: '',
    },
    imgDesktop: {
      type: Object,
      required: true,
      default: () => {},
    },
    // img: {
    //   type: String,
    //   required: true,
    // },
    // img2x: {
    //   type: String,
    //   default: null,
    // },
    // imgAlt: {
    //   type: String,
    //   default: '',
    // },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.landing-intro-container
  padding: 70px 0 30px

.landing-intro
  @extends $landing-container
  display flex
  justify-content space between
  margin 0 auto

  &__col
    width 50%
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-start

    &--text
      padding-right 120px

    &--image
      position relative

  &__image-wrapper
    position absolute
    top -82px
    left -40px
    width 125%

  &__image
    margin 0

.title
  margin 0
  font-size $fs-7
  text-align left
  line-height 1.16

.subtitle
  display inline-block
  color $c-landing-gray
  font-size 10px
  font-weight $fw-bold
  margin-bottom 30px
  line-height 1

.intro
  margin 26px 120px 0 0
  font-size $fs-2
  line-height 1.5

.tag
  font-size $fs-0

.read-btn
  margin 95px 0 110px

</style>
