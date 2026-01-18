import React from "react";

const ExpenseItem = ({ item, onDelete }) => {
  return (
    <div className="expense-item">
      <span>{item.title}</span>
      <span> Rs {item.amount}</span>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
