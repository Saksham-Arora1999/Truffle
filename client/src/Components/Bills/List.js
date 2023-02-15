import BillItem from "./BillItem";
import classes from "./List.module.css";

const List = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={classes["bill-list__fallback"]}>Found no expenses.</h2>
    );
  }

  return (
    <ul className={classes["bill-list"]}>
      {props.items.map((expense) => (
        <BillItem
          key={expense.id}
          name={expense.name}
          address={expense.address}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default List;
