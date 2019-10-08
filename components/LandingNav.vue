<template>
  <header class="header">
    <nav class="nav">
      <CompanyLogo class="nav__logo" />
      <div>
        <ContactButton />
        <ReadButton class="nav__read-btn" />
      </div>
    </nav>
  </header>
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
.nav
  display flex
  justify-content space-between
  align-items center
  max-width 1500px
  margin 0 auto
  padding 30px 0

  &__read-btn
    margin-left 30px

.nav__logo
  width 118px
  padding 0

</style>
