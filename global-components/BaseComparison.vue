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
          >
            {{ item }}
          </li>
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
          >
            {{ item }}
          </li>
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

<style scoped lang="scss">
</style>
