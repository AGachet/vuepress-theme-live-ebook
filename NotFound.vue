<template>
  <div>
    <h1>{{ getMsg() }}</h1>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a 404 Not Found.`,
  `Looks like we've got some broken links.`,
]

export default {
  name: 'NotFound',

  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    },
  },
}
</script>
