<template>
  <div class="chapter-navigation">
    <div class="chapter-navigation__block chapter-navigation__block--left">
      <router-link
        v-if="prevPage"
        :to="{ path: prevPage.path }"
        class="chapter-navigation__link"
      >
        <div class="chapter-navigation__wrapper">
          <div class="small-title chapter-navigation__direction">Previous</div>
          <div class="chapter-navigation__title">
            {{ prevPage.frontmatter.title }}
          </div>
          <div class="chapter-navigation__arrow chapter-navigation__arrow--left">
            <ArrowLeft />
          </div>
        </div>
        <div class="small-title chapter-navigation__chapter-number">
          {{ prevPage.frontmatter.chapter_number }}
        </div>
      </router-link>
    </div>

    <div class="chapter-navigation__block">
      <router-link
        v-if="nextPage"
        :to="{ path: nextPage.path }"
        class="chapter-navigation__link"
      >
        <div class="chapter-navigation__wrapper">
          <div class="small-title chapter-navigation__direction">Next</div>
          <div class="chapter-navigation__title">
            {{ nextPage.frontmatter.title }}
          </div>
          <div class="chapter-navigation__arrow">
            <ArrowRight />
          </div>
        </div>
        <div class="small-title chapter-navigation__chapter-number">
          {{ nextPage.frontmatter.chapter_number }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ArrowLeft from '@theme/assets/svg/arrow-left.svg'
import ArrowRight from '@theme/assets/svg/arrow-right.svg'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },

  props: {
    prevPage: {
      type: Object,
      default: null,
    },
    nextPage: {
      type: Object,
      default: null,
    },
  },
}
</script>
