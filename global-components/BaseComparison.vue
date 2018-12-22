<template>
  <div>
    <div class="c-dosndonts__introduction">
      {{ intro }}
    </div>
    <div class="c-dosndonts">
      <div class="c-dosndonts__container">
        <div class="c-dosndonts__heading">
          <DosIcon
            class="c-dosndonts__icon"
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

      <div class="c-dosndonts__container c-dosndonts__container--donts">
        <div class="c-dosndonts__heading c-dosndonts__heading--donts">
          <DontsIcon
            class="c-dosndonts__icon"
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

.c-dosndonts
  display flex
  margin-top 2.5rem

  &__introduction
    margin-bottom $base-sizing

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
