import ExpenseList from "./ExpenseList";

const ExpensesItems = ({ items }) => {
  if(items.length === 0) {
      return <h2>Found no Expenses.</h2>
  }
  return <ul>
            {
                items.map((expense) => (
                    <ExpenseList items={expense} key={expense.id}/>
                ))
            }
        </ul>;
};

export default ExpensesItems;
