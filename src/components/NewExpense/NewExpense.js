import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'
export default function NewExpense({onExpenseAdded}) {
    const NewExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onExpenseAdded(expenseData);
    }
    return (
        <div className="NewExpenseWrapper">
            <ExpenseForm onSubmitExpense={NewExpenseHandler}/>
        </div>
    )
}