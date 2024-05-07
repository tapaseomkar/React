import React from "react"

const ExpenseFilter =props=>{
    const dropdownChangeHandler=event=>{
        props.onChangeFilter(event.target.value);
        return(
            <div className="expense-filter">
                <div className="expense-filetr_control">
                  <label>Filter by Year</label> 
                  <select value={props.selected} onChange={dropdownChangeHandler}>
                   <option value="2022">2022</option>   
                   <option value="2023">2022</option>   
                   <option value="2024">2022</option>   
                   <option value="2021">2022</option>   
                  </select> 
                </div>
            </div>
        );
    }};

export default ExpenseFilter;