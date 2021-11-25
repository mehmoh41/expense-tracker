const ExpenseFilter = ({onChangeFilter , selected}) => {
    const filterYearHandler = (e) => {
        onChangeFilter(e.target.value)
    }
    return (
        <div className="form-control">
            <select value={selected} onChange={filterYearHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;