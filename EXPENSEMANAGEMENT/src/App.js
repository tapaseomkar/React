import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import ExpenseItem from './Components/ExpenseItem';
import Mydoc from './Components/Mydoc';
import Expense from './Components/Expenses';
import ExpenseForm from './Components/ExpenseForm';
import { TbWorldDollar } from "react-icons/tb";
import { FaFilterCircleDollar } from "react-icons/fa6";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

const App=()=>{

  const[expense,setExpenses]=useState([]);
  const [selectedYear, setSelectedYear] = useState('2023'); // Default selected year

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleFilter = () => {
    const filteredExpenses = expense.filter((item) => {
      // Check if item.date is a Date object and has the getFullYear method
      return item.date instanceof Date && typeof item.date.getFullYear === 'function' && item.date.getFullYear().toString() === selectedYear;
    });
    setExpenses(filteredExpenses);
  };
  
  // const DataseHandler = (expenseData) => {
  //   setExpenses((prevExpenses) => {
  //     return [...prevExpenses, expenseData];
  //   }); 
  // };

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenselist'));
    if (savedExpenses) {
      // Convert date strings back to Date objects
      savedExpenses.forEach(expense => {
        expense.date = new Date(expense.date);
      });
      setExpenses(savedExpenses);
    }
  }, []);
  

  const DataseHandler = (expenseData) => {
    const updatedExpenses = [...expense, expenseData];
    localStorage.setItem('expenselist', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);
  };
  
  
  // const DataseHandler = (expenseData) => {
  //   setExpenses((prevExpenses) => {
  //     const updatedExpenses = [...prevExpenses, expenseData];
  //     localStorage.setItem('expenselist', JSON.stringify(updatedExpenses));
  //     return updatedExpenses;
  //   });
  // };

  //  useEffect(() => {
  //   const savedExpenses = JSON.parse(localStorage.getItem('expenselist'));
  //   if (savedExpenses) {
  //     setExpenses(savedExpenses);
  //   }
  // }, []);
    
//  const deleteExpenseHandler = (id) => {
//     setExpenses(prevExpenses => {
//       const updatedExpenses = prevExpenses.filter(expense => expense.id !== id);
//       localStorage.setItem('expenselist', JSON.stringify(updatedExpenses));
//       return updatedExpenses;
//     });
//   };



// const expense=[
//   {
//     id:"e1",
//     name:"mobile",
//     amount:2000,
//     date: new Date(2023,3,2)
//   },
//   {
//     id:"e2",
//     name:"ref",
//     amount:5000,
//     date: new Date(2023,1,12)

//   },
//   {
//     id:"e3",
//     name:"ref",
//     amount:5000,
//     date: new Date(2023,1,12)

//   },
//   {
//     id:"e4",
//     name:"ref",
//     amount:5000,
//     date: new Date(2023,1,12)

//   }
// ];

return (
  <div>
    <Routes>
    <Route path="/Mydoc" element={<Mydoc/>} />
    </Routes>
    <h1>WELCOME TO EXPENCE MANAGEMENT APP  <TbWorldDollar className='icon'/></h1>

   {/* <ExpenseForm /> */}
   <ExpenseForm onSaveExpenseData={DataseHandler} />
   <div className="filter"><FaFilterCircleDollar className='filtericon'  />
        <label>Filter by Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          {/* Add other years as needed */}
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>



   {/* <div className='filter'>
     <h3> FILTER CONDITION <FaFilterCircleDollar className='filtericon'  /></h3>
     <label>Date   .</label>
    <input type="date" min="2023-01-01" max="2023-12-31"  />
   </div> */}




    <Expense item={expense}/>
  </div>
);

  

}

export default App;
