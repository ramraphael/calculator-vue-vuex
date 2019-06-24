<template>
  <section class="calculator-input">
    <calculator-input-button color="dark" buttonLabel="AC" @click="$emit('click-clear')"></calculator-input-button>
    <calculator-input-button color="dark" buttonLabel="+/-" @click="$emit('toggle-positive-negative')"></calculator-input-button>
    <calculator-input-button color="dark" buttonLabel="%" @click="$emit('click-operator', '%')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="÷" @click="$emit('click-operator', '/')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="7" @click="$emit('click-number', '7')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="8" @click="$emit('click-number', '8')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="9" @click="$emit('click-number', '9')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="×" @click="$emit('click-operator', '*')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="4" @click="$emit('click-number', '4')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="5" @click="$emit('click-number', '5')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="6" @click="$emit('click-number', '6')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="–" @click="$emit('click-operator', '-')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="1" @click="$emit('click-number', '1')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="2" @click="$emit('click-number', '2')"></calculator-input-button>
    <calculator-input-button color="light" buttonLabel="3" @click="$emit('click-number', '3')"></calculator-input-button>
    <calculator-input-button color="accent" buttonLabel="+" @click="$emit('click-operator', '+')"></calculator-input-button>
    <calculator-input-button color="light" :size="2" buttonLabel="0" @click="$emit('click-number', '0')"></calculator-input-button>
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
  }
}
</script>

<style lang="scss" scoped>
  .calculator-input {
    display: grid;
    grid-gap: 1px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(4, 1fr);
    flex-grow: 1;
    border-bottom-right-radius: 2%;
  }
</style>
