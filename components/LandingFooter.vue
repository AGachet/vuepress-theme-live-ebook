<template>
  <div class="footer-container">
    <footer class="footer">
      <nav class="nav">
        <CompanyLogo />
        <div>
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

export default {
  components: {
    CompanyLogo,
    ReadButton,
    ContactButton,
  },
}
</script>

<style scoped lang="stylus">
  @require '~@theme/styles/shared'
  .footer-container
    padding 42px 0 58px
    border-top 1px solid $c-footer-border

  .footer
    @extends $landing-container
    display flex
    flex-direction column
    margin 0 auto

    &__copy
      color $c-landing-text
      font-size 10px
      line-height 1.2
      text-align center

  .nav
    display flex
    justify-content space-between
    align-items center

    &__read-btn
      margin-left 30px
</style>
