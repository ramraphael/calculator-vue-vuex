<template>
  <section class="calculator-display">
    <div class="calculator-display__input">{{currentResult || currentOperand || '0'}}</div>
  </section>
</template>

<script>
export default {
  name: 'calculator-display',
  props: {
    currentOperand: String,
    currentResult: String
  }
};
</script>

<style lang="scss">
.calculator-display {
  overflow: hidden;
  &__input {
    // color: #d0d0d0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 7rem;
    padding-right: 2rem;
    vertical-align: center;
    text-align: right;
  }
}
</style>
