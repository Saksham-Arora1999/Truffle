import { useState, useRef } from "react";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const patientNameRef = useRef();
  const addressRef = useRef();
  const hospitalNameRef = useRef();
  const amountRef = useRef();
  const dateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      id: Math.random().toString(),
      name: patientNameRef.current.value,
      address: addressRef.current.value,
      hospital_name: hospitalNameRef.current.value,
      date: new Date(dateRef.current.value),
      amount: amountRef.current.value,
    };

    props.onSaveExpenseData(newData);
    patientNameRef.current.value = "";
    addressRef.current.value = "";
    hospitalNameRef.current.value = "";
    amountRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <div className={classes["new-expense"]}>
      <form onSubmit={submitHandler}>
        <div className={classes["new-expense__controls"]}>
          <div className={classes["new-expense__control"]}>
            <label>Patient Name</label>
            <input type="text" ref={patientNameRef} />
          </div>
          <div className={classes["new-expense__control"]}>
            <label>Address</label>
            <input type="text" ref={addressRef} />
          </div>
          <div className={classes["new-expense__control"]}>
            <label>Hospital Name</label>
            <input type="text" ref={hospitalNameRef} />
          </div>
          <div className={classes["new-expense__control"]}>
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountRef} />
          </div>
          <div className={classes["new-expense__control"]}>
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              ref={dateRef}
            />
          </div>
        </div>
        <div className={classes["new-expense__actions"]}>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
