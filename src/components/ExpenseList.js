import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      <p>More info here.</p>
      { props.expenses.length }
      { props.expenses.map((expense) => {
        return (
          <ExpenseListItem key={expense.id} {...expense} />
        );
      }) }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
