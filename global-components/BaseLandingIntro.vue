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
          class="landing-intro__text-block"
          v-if="tag"
        >
          <span class="tag">
            {{ tag }}
          </span>
        </div>
      </div>
      <!-- <div class="landing-intro__col landing-intro__col--image">
        <slot />
      </div> -->
    </div>
  </section>
</template>

<script>
import ReadButton from '@theme/components/ReadButton'

export default {
  components: {
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
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.landing-intro-container
  padding: 46px 0 30px

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

  &__col--text
    padding-right 120px

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
    margin 26px 140px 0 0
    font-size $fs-2
    line-height 1.5

  .tag
    font-size $fs-0

  .read-btn
    margin 5.3rem 0 5.5rem
</style>
