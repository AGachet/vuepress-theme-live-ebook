<template>
  <ul class="chapter-sections">
    <slot
      v-for="section in sections"
      name="section"
      :slug="section.slug"
      :title="section.title"
      :hash="getHash(section.slug)"
    />
  </ul>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      default: null,
    },
  },

  methods: {
    getHash (slug) {
      return `#${encodeURIComponent(slug)}`
    },
  },
}
</script>

<style scoped lang="stylus">
@require '~@theme/styles/shared'

.chapter-sections
  list-style none
  padding 0
</style>
