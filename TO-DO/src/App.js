import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const[isCompleteScreen,setIsCompleteScree]=useState(false);
  const[allToDos,setToDos]=useState([]);
  const[newTitle,setNewTitle]=useState("");
  const[newDescription,setNewDiscription]=useState("");

  const handleAddToDo = () => {
    let newToDoItem = {
      title: newTitle,
      description: newDescription
    };
  
    let updatedToDoAr = [...allToDos];
    updatedToDoAr.push(newToDoItem);
    setToDos(updatedToDoAr);
    localStorage.setItem('todolist',JSON.stringify(updatedToDoAr))
    // Convert array into Object
  };

 useEffect(() => {
  const savedExpenses = JSON.parse(localStorage.getItem('expenselist'));
  if (savedExpenses) {
    setExpenses(savedExpenses);
  }
}, []);


  return (
    <div className="App">
      <h1>MY tOdOlIST</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>

          <div className='todo-input-item'>
            <label>Title: </label>
            <input type="text"  value={newTitle}  onChange={(e)=>setNewTitle(e.target.value)} placeholder="what's the task title"/>
          </div>

          <div className='todo-input-item'>
            <label>Description: </label>
            <input type="text" value={newDescription} onChange={(e)=>setNewDiscription(e.target.value)} placeholder="what's the task Description"/>
          </div>
          {/* Q.why onChange={(e)=>setNewTitle(e.target.value)} is required............
The onChange event handler in React is used to capture changes in the input fields.
 When you use onChange={(e) => setNewTitle(e.target.value)}, you're telling React to 
 call the setNewTitle function every time the input field's value changes. 
This function then updates the newTitle state with the new value entered by the user. */}

          <div className='todo-input-item'>
            <button type='button' onClick={handleAddToDo} className='primaryBtn'>ADD</button>
          </div>

        </div>

        <div className='btn-area'>
          <button className={`secBtn ${isCompleteScreen===false && `active`}`} onclick={()=>setIsCompleteScree(false)}>ToDo</button>
          <button className={`secBtn ${isCompleteScreen===true && `active`}`} onclick={()=>setIsCompleteScree(true)}>Completed</button>
          {/* toggling between class */}
        </div>

        <div className='todo-list'>
         {allToDos.map((item,index)=>{
           return(
            <div className='todo-list-item' key={index}>

            <div>
            <h1>{item.title}</h1>
            <p1>{item.description}</p1>
            </div>
            <div>
            <MdDelete className='icon' />
            <BsCheckLg className='check-icon' />
            
            </div>
           
          </div>
           );
         })}

        

        </div>

      </div>
    </div>
  );
}

export default App;


//we will see how to use react icon.........
//  npm install react-icons --save
// react -icon page website import and tags use it in pgm



//Q. why we need this code in it
// let updatedToDoAr = [...allToDos];
// updatedToDoAr.push(newToDoItem);
// setToDos(updatedToDoAr);.........
// let updatedToDoAr = [...allToDos];: This line creates a new array (updatedToDoAr)
//  by spreading all elements of the allToDos array into it. This is done to create a shallow copy of the allToDos array. 
//  It's important to create a new array instead of directly modifying the existing state array (allToDos) to ensure immutability 
//  in React.

// updatedToDoAr.push(newToDoItem);: This line adds the new todo item (newToDoItem) 
// to the end of the updatedToDoAr array.

// setToDos(updatedToDoAr);: This line updates the allToDos state with the new array 
// (updatedToDoAr). By calling setToDos with the new array, React re-renders the component 
// and updates the UI to reflect the changes in the state.