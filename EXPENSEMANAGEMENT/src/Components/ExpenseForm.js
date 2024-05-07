import { useState } from "react";
import "./ExpenseForm.css";
import { Formik, yupToFormErrors } from "formik";
import * as Yup from "yup";
const ExpenseForm = ({onSaveExpenseData}) => {
    
    const [name,setName]=useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    // const formHandler=(event)=>
    // { event.preventDefault(); 
    //     console.log(name+" "+amount+""+date);
    //     console.log(amount);
    //     // Reset the form fields to their default values
    //    setName("");
    //    setAmount("");
    //    setDate("");
    // }
    
    const formHandler = (event) => {
      event.preventDefault();
      const expenseData = {
        id: Math.random().toString(),
        name: name,
        amount: +amount,
        date: new Date(date),
      };
      onSaveExpenseData(expenseData);
      setName("");
      setAmount("");
      setDate("");
    };





    return (
      
      <form onSubmit={formHandler} >
        <div className="new-expense_controls">

          <div className="new-expense_control">
            <label>Name   .</label>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} />
          </div>

          <div className="new-expense_control">
            <label>Amount   .</label>
            <input type="number" min="0.01" step="0.01" value={amount} onChange={(event)=>setAmount(event.target.value)} />
          </div>

          <div className="new-expense_control">
            <label>Date   .</label>
            <input type="date" min="2020-01-01" max="2023-12-31" value={date} onChange={(event)=>setDate(event.target.value)}/>
          </div>

        </div>

        <div className="new-expense_actions" />
        <button className="primaryBtn" type="submit" >Add</button>

      </form>
     
    );
  };
   
  export default ExpenseForm;

  //event.preventDefault() in the formHandler function to prevent the default form submission behavior.

  //onChange={(event)=>setName(event.target.value)} ...........
  