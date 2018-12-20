<template>
  <div class="c-qa">
    <div class="c-qa__item">
        <div class="c-qa__bullet">Q</div>
        <div class="c-qa__content">{{ question }}</div>
    </div>
    <div class="c-qa__item c-qa__item--faded">
        <div class="c-qa__bullet">A</div>
        <div class="c-qa__content">{{ answer }}</div>
    </div>
</div>
</template>

<script>
export default {
 props: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }, 
};
</script>

<style scoped lang="scss">
</style>
