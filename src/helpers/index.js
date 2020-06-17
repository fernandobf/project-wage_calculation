const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});


function formatMoney(number) {
  return moneyFormatter.format(number);
}

function formatPercentage(number) {
  return `${number.toFixed(2).replace('.', ',')} %`;
}

export { formatMoney, formatPercentage };
