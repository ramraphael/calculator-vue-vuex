<template>
  <section class="calculator-input">
    <calculator-input-button color="dark" buttonLabel="AC" @click="$emit('click-clear')"></calculator-input-button>
    <!-- Spent more time that I'm proud to admit trying to get the right characters for ⁺∕₋... -->
    <calculator-input-button color="dark" buttonLabel="⁺∕₋" @click="$emit('toggle-positive-negative')"></calculator-input-button>
    <calculator-input-button color="dark" buttonLabel="%" @click="clickOperator('%')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="÷" @click="clickOperator('/')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="7" @click="clickNumber('7')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="8" @click="clickNumber('8')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="9" @click="clickNumber('9')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="×" @click="clickOperator('*')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="4" @click="clickNumber('4')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="5" @click="clickNumber('5')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="6" @click="clickNumber('6')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="–" @click="clickOperator('-')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="1" @click="clickNumber('1')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="2" @click="clickNumber('2')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="3" @click="clickNumber('3')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="+" @click="clickOperator('+')"></calculator-input-button>
    <calculator-input-button color="light" :size="2" buttonLabel="0" @click="clickNumber('0')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="." @click="$emit('click-decimal')"></calculator-input-button>    
    <calculator-input-button color="accent" buttonLabel="=" @click="$emit('click-equals')"></calculator-input-button>
  </section>
</template>

<script>
import CalculatorInputButton from './CalculatorInputButton';
export default {
  name: 'calculator-input',
  components: {
    CalculatorInputButton
  },
  methods: {
    clickNumber(digit) {
      this.$emit('click-number', digit)
    },
    clickOperator(operator) {
      this.$emit('click-operator', operator)
    }
  }
}
</script>

<style lang="scss">
  .calculator-input {
    overflow: hidden;
    display: grid;
    grid-gap: 2.5px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    flex-grow: 1;
    border-bottom-right-radius: 2%;
  }
</style>
