import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = (props) => {
  console.log("ExpenseListItem props", props);
  const { id, dispatch, description, amount, createdAt } = props;
  return (
    <div>
      <p>Individual Expense List Item</p>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
      <p>CreatedAt: {createdAt}</p>
      <button data-id={id} onClick={(e) => {
        const id = e.target.getAttribute("data-id");
        dispatch(removeExpense({ id }));
      }}>Remove</button>
    </div>
  );
};

export default connect()(ExpenseListItem);