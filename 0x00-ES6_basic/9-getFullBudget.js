import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    }, // "getIncomeInDollars: function (income)" instead
    getIncomeInEuros(income) {
      return `${income} euros`;
    }, // "getIncomeInEuros: function (income)" instead
  };

  return fullBudget;
}
