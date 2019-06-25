/* eslint-disable consistent-return */

export default {
  getters: {
    // Returns evaluation of firstOperand, the operator and currentOperand
    getResult: state => () => {
      const { firstOperand, currentOperand, operator } = state;
      if (firstOperand && currentOperand && operator) {
        switch (operator) {
          case '+':
            return String(Number(firstOperand) + Number(currentOperand));
          case '-':
            return String(Number(firstOperand) - Number(currentOperand));
          case '%':
            return String((Number(firstOperand) / 100) * currentOperand);
          case '*':
            return String(Number(firstOperand) * Number(currentOperand));
          case '/':
            return String(Number(firstOperand) / Number(currentOperand));
          default:
            return console.log('Unknown operator');
        }
      }
    }
  }
};
