const employee = require('../models/employeeModel')
const insuranceClaim = require('../models/insuranceClaimModel')
const insurancePolicy = require('../models/insurancePolicyModel')

const mongoose = require('mongoose')

// get all employees
const getEmployees = async (req, res) => {
    const employees = await employee.find({}).sort({createdAt: -1})
  
    res.status(200).json(workouts)
  }


  module.exports = {
    getEmployees
  }