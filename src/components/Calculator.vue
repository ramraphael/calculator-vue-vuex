<template>
  <main class="calculator">
    <window-header></window-header>
    <calculator-display :currentOperand="currentOperand" :currentResult="currentResult"></calculator-display>
    <calculator-input
      @click-clear="clearAll"
      @toggle-positive-negative="togglePositiveNegative"
      @click-number="clickNumber($event)"
      @click-decimal="clickDecimal"
      @click-operator="clickOperator($event)"
      @click-equals="clickEquals"
    ></calculator-input>
  </main>
</template>

<script>
import WindowHeader from './TitleBar/WindowHeader';
import CalculatorDisplay from './CalculatorUI/CalculatorDisplay';
import CalculatorInput from './CalculatorUI/CalculatorInput';
import { mapState, mapActions } from 'vuex';
import {
  CLEAR_ALL,
  TOGGLE_POSITIVE_NEGATIVE,
  CLICK_NUMBER,
  CLICK_DECIMAL,
  CLICK_OPERATOR,
  EVALUATE_RESULT,
  KEYPRESS
} from '../store/actions/actionTypes';

export default {
  name: 'Calculator',
  components: {
    WindowHeader,
    CalculatorDisplay,
    CalculatorInput
  },
  // Only map state properties that are needed to reduce re-renders
  computed: mapState(['currentOperand', 'currentResult']),
  methods: {
    ...mapActions({
      clearAll: CLEAR_ALL,
      togglePositiveNegative: TOGGLE_POSITIVE_NEGATIVE,
      clickNumber: CLICK_NUMBER,
      clickDecimal: CLICK_DECIMAL,
      clickOperator: CLICK_OPERATOR,
      clickEquals: EVALUATE_RESULT
    }),
    // Keydown event handler
    onKeyPress(e) {
      const {key} = e
      if (key.length === 1 && /[0-9]/.test(key)) {
        this.clickNumber(key);
      } else if (key === '.') {
        this.clickDecimal();
      } else if (/^(\+|-|\*|\/|%)$/.test(key)) {
        this.clickOperator(key);
      } else if (key === '=' || key === 'Enter') {
        this.clickEquals();
      } else if (key === 'Escape') {
        this.clearAll();
      }
    }
  },
  mounted() {
    // Add event listeners for common keyboard shortcuts
    window.addEventListener('keydown', this.onKeyPress);
  },
  beforeDestroy() {
    // Remove listener before unmount to prevent memory leaks
    window.removeEventListener('keydown', this.onKeyPress);
  }
};
</script>

<style lang="scss">
.calculator {
  background-color: #373737;
  border: 3px solid #373737;
  border-radius: 2.5%;
  box-shadow: rgba(55, 55, 55, 0.4) 2px 2px 5px 4px;
  display: flex;
  flex-direction: column;
  height: 45rem;
  width: 30rem;
}
</style>
