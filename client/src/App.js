import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import AddBill from "./Components/Bills/AddBill";
import List from "./Components/Bills/List";
import ExpenseForm from "./Components/Bills/ExpenseForm";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/items").then((res) => {
      // console.log(res.data.data);
      setData(res.data.data);
    });
  }, []);

  const onSaveExpenseDataHandler = (data) => {
    axios.post("http://localhost:4000/items", data).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  };

  return (
    <div className="App">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
      <List items={data} />
    </div>
  );
}

export default App;
