<template>
  <header class="header">
    <nav class="nav">
      <CompanyLogo />
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
$root = '.nav'

  {$root}
    display flex
    justify-content space-between
    align-items center

    &__read-btn
      margin-left 30px
</style>
