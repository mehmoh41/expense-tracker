export default function ExpenseDate({ date }) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day =   date.toLocaleString("en-US", { day: "2-digit" });
  const year =  date.getFullYear();

  
  return (
    <div className="date">
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
    </div>
  );
}
