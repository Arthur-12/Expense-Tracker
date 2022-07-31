import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) =>{
  const [enteredTitle, setEnteredTitle]= useState("");
  const [enteredAmount, setAmount] = useState("")
  const [enteredDate, setDate] = useState("")

  // const [input, setInput] = useState({
  //   enteredTitle:"",
  //   enteredAmount:"",
  //   enteredDate:""
  // });

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value)
    // setInput({
    //   ...input,
    //   enteredTitle: event.target.value,
    // })
  }
  const amountChangeHandler = (event) =>{
    setAmount(event.target.value)
    // setInput({
    //   ...input,
    //   enteredAmount: event.target.value,
    // })
  }
  const dateChangeHandler =(event)=>{
    setDate(event.target.value)
  //   setInput({
  //     ...input,
  //     enteredDate : event.target.value,
  //   });
  //   setInput((prevState) =>{
  //     return {...prevState,enteredDate : event.target.value, }
  //   })
  }
  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData ={
      title:enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
      
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  }
  return(
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step = "0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max = "2022-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  )
}
export default ExpenseForm