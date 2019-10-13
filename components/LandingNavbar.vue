<template>
  <header
    class="header"
  >
    <nav
      data-aos="fade-in"
      data-aos-delay="100"
      class="nav"
    >
      <CompanyLogo class="nav__logo nav__logo--desktop" />
      <CompanyLogoMobile class="nav__logo nav__logo--mobile" />
      <div>
        <ContactButton />
        <ReadButton class="nav__read-btn" />
      </div>
    </nav>
  </header>
</template>

<script>
import CompanyLogo from './CompanyLogo'
import CompanyLogoMobile from './CompanyLogoMobile'
import ReadButton from './ReadButton'
import ContactButton from './ContactButton'

export default {
  components: {
    CompanyLogo,
    CompanyLogoMobile,
    ReadButton,
    ContactButton,
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.nav
  display flex
  justify-content space-between
  align-items center
  max-width 1500px
  margin 0 auto
  padding 20px 0

  @media (min-width: $screen-sm-min)
    padding 30px 0

  &__read-btn
    display none
    margin-left 30px

    @media (min-width: $screen-sm-min)
      display inline-block

.nav__logo
  width 118px
  padding 0

  &--desktop
    max-width 118px
    display none

    @media (min-width: $screen-sm-min)
      display inline-block

  &--mobile
    max-width 18px

    @media (min-width: $screen-sm-min)
      display none

</style>
