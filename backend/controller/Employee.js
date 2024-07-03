const connection = require("../model/dbconnect.js");

// //////////////POST///////////
const postEmployee = async (req, res) => {
  let data = req.body;
  let sqlquery = `INSERT INTO emp set?`;

  await connection.query(sqlquery, [data], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

////////////GET DATA/////////////////

const userget = async (req, res) => {
  let sqlquery = "SELECT * FROM emp";
  await connection.query(sqlquery, function (error, result) {
    if (error) {
      console.log(error);
    } else {
      res.send(result);
    }
  });
};

////////////////////////UPDATE DATA////////////

const empupdate = async (req, res) => {
  let emp_id = req.query.emp_id;
  let data2 = req.body;
  let sqlquery = `UPDATE emp SET ? WHERE emp_id=?`;
  await connection.query(sqlquery, [data2, emp_id], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};

////////////////////////DELETE DATA////////////

const empdelete = async (req, res) => {
  let emp_id = req.query.emp_id;
  let sqlquery = `DELETE FROM emp WHERE emp_id=?`;
  await connection.query(sqlquery, [emp_id], function (error, result) {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
};
module.exports = { userget, postEmployee, empupdate, empdelete };
