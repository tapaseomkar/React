import React from "react";
const ExpenseDate=(props)=>{
    
    if (!props.date || !(props.date instanceof Date) || isNaN(props.date.getTime())) {
        return <div>Error: Invalid Date</div>;
    }
    const month = props.date.toLocaleString('en-US', {month : 'long'});
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();
    return(
        <div className="expense-item">
           
            <div>{day}</div>
            <div> {month}</div>
            <div>{year}</div>
    
        </div>);
}

export default ExpenseDate;