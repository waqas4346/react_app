import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => {
  console.log("ExpenseListFilters props:", props);
  const { text, sortBy } = props.filters;
  return (
    <div>
      <input type="text" value={text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} />

      <select value={sortBy} onChange={(e) => {
        if (e.target.value == "date") {
          props.dispatch(sortByDate());
        } else if (e.target.value == "amount") {
          props.dispatch(sortByAmount());
        }
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);