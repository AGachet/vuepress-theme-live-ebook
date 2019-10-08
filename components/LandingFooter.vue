<template>
  <div class="footer-container">
    <footer class="footer">
      <nav class="nav">
        <div class="nav__col">
          <CompanyLogo class="nav__logo" />
        </div>
        <SocialIcons class="nav__col nav__col--center" />
        <div class="nav__col nav__col--right">
          <ContactButton />
          <ReadButton class="nav__read-btn" />
        </div>
      </nav>
      <p class="footer__copy">
        {{ $site.themeConfig.company.copyRights }}
      </p>
    </footer>
  </div>
</template>

<script>
import CompanyLogo from './CompanyLogo'
import ReadButton from './ReadButton'
import ContactButton from './ContactButton'
import SocialIcons from './SocialIcons'

export default {
  components: {
    CompanyLogo,
    ReadButton,
    ContactButton,
    SocialIcons,
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'
  .footer-container
    padding 45px 0
    border-top 1px solid $c-footer-border

    @media (min-width: $screen-sm-min)
      padding 42px 0 58px

  .footer
    padding 0 30px
    display flex
    flex-direction column
    margin 0 auto

    @media (min-width: $screen-md-min)
      @extends $landing-container

    &__copy
      display none
      margin-top 40px
      color $c-landing-text
      font-size 10px
      line-height 1.2
      text-align center

      @media (min-width: $screen-md-min)
        display block

  .nav
    display flex
    flex-direction column
    align-items flex-start

    @media (min-width: $screen-md-min)
      flex-direction row
      justify-content space-between
      align-items center

    &__col
      flex 1

      &--center
        display flex
        justify-content center
        align-items center
        margin-top 24px

        @media (min-width: $screen-md-min)
          margin-top 0

      &--right
        display none
        text-align right

        @media (min-width: $screen-md-min)
          display block

    &__read-btn
      margin-left 30px

    &__logo
      width 100px
      padding 0
</style>
