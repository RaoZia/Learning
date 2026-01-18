import React, { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

const ExpenseTracker = () => {
  // ####################### Declare state for expense #######################################
  const [expense, setexpense] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  // ####################### Runs the function whenever expense value changes #######################################
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  // ####################### Add newly added expense record in expense state #######################################
  const addExpense = (expense) => {
    setexpense((prev) => [...prev, expense]);
  };
  // ####################### Delete the expense with id #######################################
  const deleteExpense = (id) => {
    setexpense((prev) => prev.filter((item) => item.id != id));
  };

  // ####################### Calculates sum of all values in amount of expense state #######################################
  const totalExpense = expense.reduce((t, item) => t + item.amount, 0);
  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <h3 className="total">Total Expenses: RS {totalExpense.toFixed(2)}</h3>
      <ExpenseList expense={expense} onDelete={deleteExpense} />
    </div>
  );
};

export default ExpenseTracker;
