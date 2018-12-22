<template>
  <div class="c-qa">
    <div class="c-qa__item">
      <div class="c-qa__bullet">
        Q
      </div>
      <div class="c-qa__content">
        {{ question }}
      </div>
    </div>
    <div class="c-qa__item c-qa__item--faded">
      <div class="c-qa__bullet">
        A
      </div>
      <div
        class="c-qa__content"
        :inner-html.prop="answer | markdown"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.c-qa
  margin-bottom $base-sizing

  &__item
    display flex
    align-items top
    margin-bottom (0.674 * $base-sizing)
    font-size $fs-2
    font-weight $fw-bold
    line-height $base-sizing

    @media (min-width: $screen-md-min)
      font-size $fs-3

    &--faded
      margin-bottom 3rem
      font-weight $fw-regular

      .c-qa__bullet
        background-color lighten($c-primary, 20%)

  &__bullet
    circle 2rem
    display flex
    align-items center
    justify-content center
    min-width 2rem
    margin-right 1rem
    font-size $fs-1
    font-weight $fw-bold
    background-color $c-primary
    color $c-white
</style>
