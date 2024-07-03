const express = require("express");
const EmployeeRouter = express.Router();
EmployeeRouter.use(express.json());
const {
  postEmployee,
  userget,
  empupdate,
  empdelete,
} = require(`../controller/Employee`);

EmployeeRouter.post("/addemployee", postEmployee);
EmployeeRouter.get("/view", userget);
EmployeeRouter.patch("/empupdate", empupdate);
EmployeeRouter.delete("/empdelete", empdelete);

module.exports = EmployeeRouter;
