import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, settitle] = useState();
  const [amount, setamount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      return alert("Please fill all fields");
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    };
    onAddExpense(newExpense);
    settitle("");
    setamount("");
  };
  return (
    <div>
      <form action="" className="expense-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button className="">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
