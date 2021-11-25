import "./expense.css";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from 'react'
import ExpensesItems from "./ExpensesItems";
import ExpensesChart from "./ExpensesChart";
function Expense({items}) {
  
  const [filteredYear , setFilteredYear] = useState("2021")

  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear) 
  }
  const filterExpenses = items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
    });
  
  
  return (
    <div className="card">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {/* <ExpenseList items={items}/> */}

        <ExpensesChart expenses={filterExpenses}/>
       <ExpensesItems items={filterExpenses}/> 
    </div>
  );
}
export default Expense;
