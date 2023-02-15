const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/items", router);

app.listen(4000, () => {
  console.log("App is running");
});
