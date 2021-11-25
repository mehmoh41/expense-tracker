import './ExpenseForm.css'
import {useState} from 'react'
const ExpenseForm = ({onSubmitExpense}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

const titleChangeHandler = (evt) => {
        setEnteredTitle(evt.target.value);

    // const value = evt.target.value;
    // setFormInputs({
    //     ...formInputs,
    //     [evt.target.name] : value
    // })
    
}
const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value)
}
const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value)
}

    const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
    
        onSubmitExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
      };
    


    return (
        <form onSubmit={submitHandler}>
            <div class="form-control">
                <label>Title</label>
                <input type="text" name="title" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div class="form-control">
                <label>Amount</label>
                <input type="number" name="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div class="form-control">
                <label>Date</label>
                <input type="date" name="date" min="2018-01-01" max="2022-01-01" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div class="submit-btn">
                <input type="submit" />
            </div>
        </form>
    )
}
export default ExpenseForm;