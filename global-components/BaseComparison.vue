<template>
  <div>
    <p class="intro">
      {{ intro }}
    </p>
    <div class="comparison">
      <div class="comparison__container">
        <div class="comparison__heading">
          <DosIcon
            class="comparison__icon"
          />
          DOs
        </div>
        <ul>
          <li
            v-for="item in good"
            :key="item"
            :inner-html.prop="item | markdown"
          />
        </ul>
      </div>

      <div class="comparison__container comparison__container--donts">
        <div class="comparison__heading comparison__heading--donts">
          <DontsIcon
            class="comparison__icon"
          />
          DON'Ts
        </div>
        <ul>
          <li
            v-for="item in bad"
            :key="item"
            :inner-html.prop="item | markdown"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DosIcon from '@theme/assets/svg/dos.svg'
import DontsIcon from '@theme/assets/svg/donts.svg'

export default {
  components: {
    DosIcon,
    DontsIcon,
  },

  props: {
    intro: {
      type: String,
      required: true,
    },
    good: {
      type: Array,
      default: null,
    },
    bad: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.intro
  margin 0
  font-weight $fw-bold

.comparison
  display flex
  margin-top 1.5rem

  &__container
    width 50%
    padding-left 1.5rem
    margin-bottom 1.5em
    border-top 4px solid $c-green

    &--donts
      border-color $c-red

  &__heading
    margin-top 38px
    margin-bottom 28px
    font-size $fs-1
    font-weight $fw-bold
    color $c-green
    display flex
    align-items center

    &--donts
      color $c-red

  &__icon
    margin-right 0.5rem
    height 24px

  li
    margin-bottom $base-sizing
    padding-left 0
    font-size $fs-2
    line-height 1.33rem
    list-style-type none
    text-indent 0

    &::before
      content none
</style>
