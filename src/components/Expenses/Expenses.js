import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler= selectedYear =>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return ( 
   <div>
   
    <Card className="expenses">
    <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
    <ExpensesChart  expenses = {filteredExpenses}/>
    {filteredExpenses.length === 0 ? (<h5 className='display'>You don't have any expenses for this year</h5>) :  (
      filteredExpenses.map((expense)=>(
        <ExpenseItem
          key = {expense.id}
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
        />
      ))
    )}
      
    </Card>
    </div> 
  );
}

export default Expenses;