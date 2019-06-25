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
  EVALUATE_RESULT,
  CHECK_IF_CONTINUING_OPERATION
} from './actionTypes';

export default {
  actions: {
    // Clear all properties
    [CLEAR_ALL]({ commit }) {
      commit(RESET_CURRENT_OPERAND);
      commit(RESET_FIRST_OPERAND);
      commit(RESET_CURRENT_RESULT);
      commit(RESET_OPERATOR);
    },
    // Toggles leading '-' on currentOperand
    // If currentResult exists, currentOperand set to currentResult and currentResult is reset
    [TOGGLE_POSITIVE_NEGATIVE]({ commit, dispatch, state }) {
      // Only currentOperand can be toggled, remove or add '-' as first character
      dispatch(CHECK_IF_CONTINUING_OPERATION);
      const { currentOperand } = state;
      currentOperand[0] === '-'
        ? commit(SET_CURRENT_OPERAND, currentOperand.slice(1))
        : commit(SET_CURRENT_OPERAND, '-'.concat(currentOperand));
    },
    // Resets currentResult if it exists
    // Otherwise appends selectedNumber to currentOperand
    [CLICK_NUMBER]({ commit, state }, selectedNumber) {
      const { currentResult, currentOperand } = state;
      if (currentResult) {
        commit(RESET_CURRENT_RESULT);
      }
      commit(SET_CURRENT_OPERAND, currentOperand.concat(selectedNumber));
    },
    // Checks if continuing operation, then append decimal point if one doesn't exist
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
    // Updates operator
    // Evaluate result. If currentResult exists, uses it as first operand
    // Otherwise sets firstOperand to currentOperand
    // Resets currentOperand
    [CLICK_OPERATOR]({ commit, dispatch, state }, selectedOperator) {
      dispatch(EVALUATE_RESULT);
      const { currentOperand, currentResult } = state;
      if (currentResult) {
        commit(SET_FIRST_OPERAND, currentResult);
        commit(RESET_CURRENT_RESULT);
        commit(RESET_CURRENT_OPERAND);
      } else {
        commit(SET_FIRST_OPERAND, currentOperand);
        commit(RESET_CURRENT_OPERAND);
      }
      commit(SET_OPERATOR, selectedOperator);
    },
    // Sets currentResult and resets first and current operands
    [EVALUATE_RESULT]({ commit, state, getters }) {
      // Only do calculations if there are no current results, and first and current operands exist
      const { currentResult, firstOperand, currentOperand } = state;
      const { getResult } = getters;
      if (!currentResult && firstOperand && currentOperand) {
        commit(SET_CURRENT_RESULT, getResult());
        commit(RESET_FIRST_OPERAND);
        commit(RESET_CURRENT_OPERAND);
      }
    },
    // Checks for continuing operations
    // Sets currentOperand to currentResult and resets currentResult
    [CHECK_IF_CONTINUING_OPERATION]({ commit, state }) {
      const { currentOperand, currentResult } = state;
      if (!currentOperand && currentResult) {
        commit(SET_CURRENT_OPERAND, currentResult);
        commit(RESET_CURRENT_RESULT);
      }
    }
  }
};
