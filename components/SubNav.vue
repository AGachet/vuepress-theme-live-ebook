<template>
  <div>
    <div class="subnav-wrapper">
      <div class="col-xs-12 col-md-3 subnav js-subnav subnav--active">
        <a
          :href="$site.themeConfig.exitUrl"
          class="subnav__back-button"
        >
          Exit e-book
        </a>
        <div class="subnav__chapters-container subnav__chapters-container--active">
          <div class="subnav__chapter-header-container">
            <div class="subnav__arrows-container">
              <router-link
                v-if="prevUrl"
                :to="{ path: prevUrl }"
                class="subnav__arrow"
              >
                <ArrowLeft />
              </router-link>
              <span
                v-else
                class="subnav__arrow subnav__arrow--disabled"
              >
                <ArrowLeft />
              </span>
              <router-link
                v-if="nextUrl"
                :to="{ path: nextUrl }"
                class="subnav__arrow"
              >
                <ArrowRight />
              </router-link>
              <span
                v-else
                class="subnav__arrow subnav__arrow--disabled"
              >
                <ArrowRight />
              </span>
            </div>
            <div class="chapter-number">{{ chapterNumber }}</div>
            <button class="chapter-toggle js-show-chapter-nav">
              Show all chapters
            </button>
          </div>
          <div class="subnav__chapters-listing js-toc" />
        </div>

        <div class="chapter-nav__listing js-toc-chapters" />

        <div class="subnav__mobile">
          <div class="subnav__mobile-sidebar-toggle js-subnav-mobile-sidebar-toggle">
            <div class="subnav__mobile-menu-bar" />
            <div class="subnav__mobile-menu-bar" />
            <div class="subnav__mobile-menu-bar" />
          </div>
          <div class="subnav__mobile-info">
            <div class="chapter-number">{{ chapterNumber }}</div>
            <div class="subnav__mobile-chapter-title js-toc-chapter-title" />
          </div>
          <div class="subnav__mobile-arrows">
            <router-link
              v-if="prevUrl"
              :to="{ path: prevUrl }"
              class="subnav__mobile-arrow"
            >
              <ArrowLeft />
            </router-link>
            <router-link
              v-if="nextUrl"
              :to="{ path: nextUrl }"
              class="subnav__mobile-arrow"
            >
              <ArrowRight />
            </router-link>
          </div>
        </div>
        <div class="subnav__logo-wrapper">
          <a
            :href="$site.themeConfig.exitUrl"
          >
            <BaseImage
              :img="$site.themeConfig.company.logo"
              :alt="$site.themeConfig.company.name"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="chapter-sidebar">
      <div class="chapter-sidebar__close js-chapter-sidebar-close">
        <div class="chapter-sidebar__close-bar" />
        <div class="chapter-sidebar__close-bar" />
      </div>
      <div class="js-toc-all-chapters" />
      <a
        :href="$site.themeConfig.exitUrl"
        class="subnav__back-button-mobile"
      >
        Exit e-book
      </a>
      <div class="chapter-sidebar__logo-wrapper">
        <a :href="$site.themeConfig.company.url">
          <BaseImage
            :img="$site.themeConfig.company.logo"
            :alt="$site.themeConfig.company.name"
          />
        </a>
      </div>
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
    prevUrl: {
      type: String,
      default: null,
    },
    nextUrl: {
      type: String,
      default: null,
    },
  },

  computed: {
    chapterNumber () {
      return this.$page.frontmatter.chapter_number
    },
  },
}
</script>

<style scoped lang="scss">
</style>
