import React,{useState} from 'react'
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
    const [title,setTitle] = useState(props.title)
    

   let clickHander = () =>
   {
      setTitle("updated!!!")
   }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__descripition">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amout}</div>
      </div>
      <h2>{title}</h2>
      <button onClick={clickHander}>Update</button>
   
     
      
    </div>

  );
}

export default ExpenseItem;
