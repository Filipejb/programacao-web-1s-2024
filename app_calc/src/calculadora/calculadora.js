exports.calcular = (num1, num2, operacao) => {
  switch (operacao) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return null;
  }
};

exports.getOperacaoNome = (operacao) => {
  switch (operacao) {
    case '+':
      return 'Adição';
    case '-':
      return 'Subtração';
    case '*':
      return 'Multiplicação';
    case '/':
      return 'Divisão';
    default:
      return 'Operação Desconhecida';
  }
};
