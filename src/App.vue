<template>
  <Calculator></Calculator>
</template>

<script>
import Calculator from './components/Calculator';
export default {
  name: 'App',
  components: {
    Calculator
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: Helvetica, 'Helvetica Neue', Arial;
  font-weight: 500;
  color: rgba(234, 234, 234, 0.95);
}
</style>

