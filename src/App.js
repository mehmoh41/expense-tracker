import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react'
// import Gallery from "./components/paginate/paginateThrough";

const expenses = [
  {
    id: '1',
    title: 'Rolex watch',
    amount: 400.2,
    date: new Date(2019, 4, 12)
  },
  {
    id: '2',
    title: 'KFC burger',
    amount: 7,
    date: new Date(2020, 6, 8)
  },
  {
    id: '1',
    title: 'Sting',
    amount: 3,
    date: new Date(2021, 9,21)
  },
  {
    id: '4',
    title: 'Sting',
    amount: 9,
    date: new Date(2021, 5,11)
  }

]
function App() {
  const [show , setShow] = useState(false);
  const [data , setData] = useState(expenses)
  const showNewForm = () => {
    setShow(!show)
  }
  const AddExpenseHandler = (expense) => {
      setData((prevData) => {
        return [expense , ...prevData]
      })
  }
  
  
  return (
    <div className="wrapper">
      <button className="new-expense" onClick={showNewForm}>{!show ? 'New Expense' : 'Close'}</button>
      {show && <NewExpense onExpenseAdded={AddExpenseHandler}/>}
      <Expense items={data} />
    </div>
  );
}

export default App;
