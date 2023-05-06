const mongoose = require("mongoose");

const Schema = mongoose.Schema


const employeeSchema = new Schema({
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

module.exports = mongoose.model('Employee', employeeSchema)