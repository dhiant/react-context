import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${totalAmount}</h1>
    </>
  );
};

export default Balance;
