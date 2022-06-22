import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);

  const { AddTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    // creating newTransaction
    const newTransaction = {
      text,
      // parse string into number
      amount: +amount,
      id: Math.floor(Math.random() * 1000000 + 1),
    };
    // passing newTransaction
    AddTransaction(newTransaction);
    setText("");
    setAmount("");
  };
  return (
    <>
      <h3>Add new Transcation</h3>
      <form action="" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="">Text</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter transaction  ..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <span>(+) indicates Income while (-) indicates Expense</span>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount with sign..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
