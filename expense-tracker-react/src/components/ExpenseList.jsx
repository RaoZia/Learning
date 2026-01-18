import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expense, onDelete }) => {
  if (expense.length === 0) {
    return <p className="no-expense ">No Expense Yet</p>;
  }
  return (
    <div className="expense-list ">
      {expense.map((item) => (
        <ExpenseItem item={item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ExpenseList;
