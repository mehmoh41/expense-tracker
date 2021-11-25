import ExpenseDate from "./ExpensesDate";
export default function ExpenseList({ items}) {
    
  return (
    
            <li>
              <div className="card-body" key={items.id}>
                  <ExpenseDate date={items.date}/>
                  <p className="card-text">{items.title}</p>
                  <h5 className="price">${items.amount}</h5>
                  {/* <button onClick={() => handleDelete(index)}>X</button> */}
              </div>
            </li>
    
      
  );
}
