import BillDate from "./BillDate";
import Card from "../UI/Card";
import classes from "./BillItem.module.css";

const BillItem = (props) => {
  return (
    <li>
      <Card className={classes["bill-item"]}>
        <BillDate date={new Date(props.date)} />
        <div className={classes["bill-item__description"]}>
          <div className={classes["bill-item__info"]}>
            <h2>Name: {props.name}</h2>
            <h2>Address: {props.address}</h2>
          </div>
          <div className={classes["bill-item__price"]}>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default BillItem;
