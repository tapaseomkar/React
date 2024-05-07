import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expense = ({ item,onDeleteExpense }) => {
  return (
    <>
      {item.map(expense => (

        <ExpenseItem
          key={expense.id}
          name={expense.name}
          date={expense.date}
          amount={expense.amount}
          onDelete={() => onDeleteExpense(expense.id)}
        />
      ))}
    </>
  );
}

export default Expense;
