const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  EmployeeID: {
    type: Number, 
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;