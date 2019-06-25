/* eslint-disable no-unused-expressions */

import {
  SET_CURRENT_OPERAND,
  RESET_CURRENT_OPERAND,
  SET_FIRST_OPERAND,
  RESET_FIRST_OPERAND,
  SET_OPERATOR,
  RESET_OPERATOR,
  SET_CURRENT_RESULT,
  RESET_CURRENT_RESULT
} from '../mutations/mutationTypes';

import {
  CLEAR_ALL,
  TOGGLE_POSITIVE_NEGATIVE,
  CLICK_NUMBER,
  CLICK_DECIMAL,
  CLICK_OPERATOR,
  CLICK_EQUALS,
  CHECK_IF_CONTINUING_OPERATION
} from './actionTypes';

export default {
  actions: {
    [CLEAR_ALL]({ commit }) {
      // Clear all properties
      commit(RESET_CURRENT_OPERAND);
      commit(RESET_FIRST_OPERAND);
      commit(RESET_CURRENT_RESULT);
      commit(RESET_OPERATOR);
    },
    [TOGGLE_POSITIVE_NEGATIVE]({ commit, dispatch, state }) {
      // Only currentOperand can be toggled, remove or add '-' as first character
      dispatch(CHECK_IF_CONTINUING_OPERATION);
      const { currentOperand } = state;
      currentOperand[0] === '-'
        ? commit(SET_CURRENT_OPERAND, currentOperand.slice(1))
        : commit(SET_CURRENT_OPERAND, '-'.concat(currentOperand));
    },
    [CLICK_NUMBER]({ commit, state }, selectedNumber) {
      // If result exists, reset it. Append selected number to current operand
      const { currentResult, currentOperand } = state;
      if (currentResult) {
        commit(RESET_CURRENT_RESULT);
      }
      commit(SET_CURRENT_OPERAND, currentOperand.concat(selectedNumber));
    },
    [CLICK_DECIMAL]({ commit, dispatch, state }) {
      dispatch(CHECK_IF_CONTINUING_OPERATION);
      const { currentOperand } = state;
      if (!currentOperand) {
        commit(SET_CURRENT_OPERAND, '0.');
      } else if (!currentOperand.includes('.')) {
        // Concat more readable than template literals or '+' for strings
        commit(SET_CURRENT_OPERAND, currentOperand.concat('.'));
      }
    },
    [CLICK_OPERATOR]({ commit, state, getters }, selectedOperator) {
      // If both firstOperand and currentOperand exist, evaluate and use result as first operand
      // Similary, use currentResult as first operand if it's already been calculated
      const { firstOperand, currentOperand, currentResult } = state;
      const { evaluate } = getters;
      if (firstOperand && currentOperand) {
        commit(SET_FIRST_OPERAND, evaluate());
        commit(RESET_CURRENT_OPERAND);
      } else if (currentResult) {
        commit(SET_FIRST_OPERAND, currentResult);
        commit(RESET_CURRENT_RESULT);
        commit(RESET_CURRENT_OPERAND);
      } else {
        commit(SET_FIRST_OPERAND, currentOperand);
        commit(RESET_CURRENT_OPERAND);
      }
      commit(SET_OPERATOR, selectedOperator);
    },
    [CLICK_EQUALS]({ commit, state, getters }) {
      // Only do calculations if there are no current results, and first and current operands exist
      const { currentResult, firstOperand, currentOperand } = state;
      const { evaluate } = getters;
      if (!currentResult && firstOperand && currentOperand) {
        commit(SET_CURRENT_RESULT, evaluate());
        commit(RESET_FIRST_OPERAND);
        commit(RESET_CURRENT_OPERAND);
      }
    },
    [CHECK_IF_CONTINUING_OPERATION]({ commit, state }) {
      const { currentOperand, currentResult } = state;
      if (!currentOperand && currentResult) {
        commit(SET_CURRENT_OPERAND, currentResult);
        commit(RESET_CURRENT_RESULT);
      }
    }
  }
};
