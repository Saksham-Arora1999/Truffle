const billsController = require("../controller/bills");

const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(billsController.getAllData)
  .post(billsController.addNewData);

module.exports = router;
