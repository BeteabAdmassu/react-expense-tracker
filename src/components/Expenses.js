import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css"

function Expenses(props)
{  
 
    return (
        <Card className="expenses">
      <ExpenseItem
        title={props[0].title}
        amout={props[0].amount}
        date={props[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props[1].title}
        amout={props[1].amount}
        date={props[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props[2].title}
        amout={props[2].amount}
        date={props[2].date}
      > </ExpenseItem>
    
    </Card>
    
    )

  

}

export default Expenses;
