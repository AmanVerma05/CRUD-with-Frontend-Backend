const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const EmployeeRouter = require('./Route/Employeeroute');
app.use('/api', EmployeeRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
