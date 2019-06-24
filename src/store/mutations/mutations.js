/* eslint-disable no-param-reassign */

import {
  SET_CURRENT_OPERAND,
  RESET_CURRENT_OPERAND,
  SET_FIRST_OPERAND,
  RESET_FIRST_OPERAND,
  SET_OPERATOR,
  RESET_OPERATOR,
  SET_CURRENT_RESULT,
  RESET_CURRENT_RESULT
} from './mutationTypes';

export default {
  mutations: {
    [SET_CURRENT_OPERAND](state, operand) {
      state.currentOperand = operand;
    },
    [RESET_CURRENT_OPERAND](state) {
      state.currentOperand = '';
    },
    [SET_FIRST_OPERAND](state, value) {
      state.firstOperand = value;
    },
    [RESET_FIRST_OPERAND](state) {
      state.firstOperand = '';
    },
    [SET_OPERATOR](state, chosenOperator) {
      state.operator = chosenOperator;
    },
    [RESET_OPERATOR](state) {
      state.operator = '';
    },
    [SET_CURRENT_RESULT](state, newResult) {
      state.currentResult = newResult;
    },
    [RESET_CURRENT_RESULT](state) {
      state.currentResult = '';
    }
  }
};
