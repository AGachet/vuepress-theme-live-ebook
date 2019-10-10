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
            :class="{'landing-intro__image--desktop' : imgMobile.img}"
            :img="imgDesktop.img"
            :img2x="imgDesktop.img2x"
            :alt="imgDesktop.imgAlt"
          />

          <BaseImage
            v-if="imgMobile.img"
            :img="imgMobile.img"
            :img2x="imgMobile.img2x"
            :alt="imgMobile.imgAlt"
            class="landing-intro__image landing-intro__image--mobile"
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
      default: null,
    },
    intro: {
      type: String,
      required: false,
      default: null,
    },
    tag: {
      type: String,
      required: false,
      default: null,
    },
    imgDesktop: {
      type: Object,
      required: true,
    },
    imgMobile: {
      type: Object,
      required: false,
      default: () => ({
        img: '',
        img2x: '',
        imgAlt: '',
      }),
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.landing-intro-container
  position relative
  padding 30px 0 50px

  @media (min-width: $screen-md-min)
    min-height: 570px

  &::before
    content ''
    position absolute
    bottom 0
    width 100%
    height 240px
    background $c-white

  @media (min-width: $screen-md-min)
    padding 70px 0 30px

    &::before
      content none

.landing-intro
  @extends $landing-container
  display flex
  margin 0 auto
  padding 0 48px
  flex-direction column

  @media (min-width: $screen-md-min)
    flex-direction row
    justify-content space between
    padding 0 20px

  &__col
    display flex
    flex-direction column
    justify-content space-between
    align-items center

    @media (min-width: $screen-md-min)
      align-items flex-start
      width 50%

      &--text
        padding-right 120px

    &--image
      position relative
      margin-top 60px

      @media (min-width: $screen-md-min)
        margin-top 0

  &__image-wrapper

    @media (min-width: $screen-md-min)
      position absolute
      top -82px
      left -40px
      width 125%

  &__image
    margin 0

    &--desktop
      display none

      @media (min-width: $screen-md-min)
        display block

    &--mobile
      box-shadow: rgba($c-black, 0.27) 20px 17px 30px 10px

      @media (min-width: $screen-md-min)
        display none

  &__text-block
    text-align center

    @media (min-width: $screen-md-min)
      text-align left

.title
  margin 0
  font-size $fs-7
  text-align center
  line-height 1.16

  @media (min-width: $screen-md-min)
    text-align left

.subtitle
  display inline-block
  color $c-landing-gray
  font-size 10px
  font-weight $fw-bold
  margin-bottom 10px
  line-height 1

  @media (min-width: $screen-md-min)
    margin-bottom 30px

.intro
  margin 26px 0 0 0
  color $c-landing-gray
  font-size $fs-2
  line-height 1.5

  @media (min-width: $screen-md-min)
    margin-right 120px

.tag
  display none
  color: darken($c-landing-bg, 10%)
  font-size $fs-0

  @media (min-width: $screen-md-min)
    display inline-block

.read-btn
  margin 40px auto

  @media (min-width: $screen-md-min)
    margin 95px 0 110px
</style>
