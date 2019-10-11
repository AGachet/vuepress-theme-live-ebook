<template>
  <div
    class="section-intro"
    :class="`section-intro--${align}`"
  >
    <span
      class="section-intro__subtitle"
      data-aos="fade-up"
      :data-aos-offset="animationTriggerOffset"
    >
      {{ subtitle }}
    </span>
    <h2
      class="section-intro__title"
      data-aos="fade-up"
      :data-aos-offset="animationTriggerOffset"
    >
      {{ title }}
    </h2>
    <p
      class="section-intro__text"
      data-aos="fade-up"
      :data-aos-offset="animationTriggerOffset"
    >
      {{ intro }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
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
    align: {
      type: String,
      required: false,
      default: 'left',
      validator: (prop) => ['left', 'right', 'center'].includes(prop),
    },
    animationTriggerOffset: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'

.section-intro
  display flex
  flex-direction column
  align-items center

  @media (min-width: $screen-md-min)
    &--left
      align-items flex-start

    &--center
      align-items center
      text-align center

    &--right
      align-items flex-end

  &__title
    margin 0
    font-size $fs-7
    text-align left
    line-height 1.16

  &__subtitle
    display inline-block
    color $c-landing-gray
    font-size 10px
    font-weight $fw-bold
    margin-bottom 25px
    line-height 1
    text-transform uppercase

  &__text
    margin 36px 0 0 0
    padding 0 22px
    color $c-landing-gray
    font-size $fs-2
    line-height 1.5

    @media (min-width: $screen-md-min)
      padding 0

</style>
