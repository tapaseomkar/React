import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate.js"
import Card from "./Card";
import { MdDelete } from "react-icons/md";

//delectrative programmin by arrow function
//to save data permen: we use approach (add data in form of state)
// .toIsoString formate to change date to 
const ExpenseItem=props=>{
  
 

    // const expenseDate=new Date(2023,3,2);
    // const expenseName="book";
    // const expenseAmount=2000;
    // const month = props.date.toLocaleString("en-US", { month: "long" });
    // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    // const year = props.date.getFullYear();

  
    return(
        
          <div className="body">
          <Card className="expense-item">
            <h2>NAME: {props.name}</h2>
            <div className="expense-item-info">
             <ExpenseDate date={props.date}/>
             Amount: {props.amount}
             </div>
             <div>
            <MdDelete className="iconss" />  
            </div>
             
          </Card>  
          </div>  
    );
}


 {/* <div>
            <div>{day}</div>
            <div> {month}</div>
            <div>{year}</div>
            </div> */}
             {/* <div>{props.date.toDateString()}</div> */}


export default ExpenseItem;