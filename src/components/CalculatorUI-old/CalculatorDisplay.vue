<template>
  <!-- <h1>Hello Calculator Display</h1> -->
  <section class="calculator-display">
    <div class="calculator-display__input">{{currentResult || currentOperand || '0'}}</div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'calculator-display',
  props: {
    currentOperand: String,
    currentResult: String
  }
};
</script>

<style lang="scss" scoped>
.calculator-display {
  width: 100%;
  &__input {
    color: #c0c0c0;
    background-color: rgba(0, 0, 0, 0);
    height: 100%;
    width: 100%;
    font-size: 7rem;
    padding-right: 2rem;
    vertical-align: center;
    text-align: right;
  }
}
</style>
