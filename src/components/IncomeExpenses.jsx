import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  // extract array of amount
  const amounts = transactions.map((transaction) => transaction.amount);
  //  caluculating income
  const incomes = amounts.filter((amount) => amount > 0);
  console.log(incomes);
  const totalIncome = incomes.reduce((acc, curr) => acc + curr, 0).toFixed(2);
  //  caluculating expense
  const expenses = amounts.filter((amount) => amount < 0);
  const totalExpense = (
    expenses.reduce((acc, curr) => acc + curr, 0) * -1
  ).toFixed(2);
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
