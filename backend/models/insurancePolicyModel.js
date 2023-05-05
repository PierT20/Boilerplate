const mongoose = require("mongoose");

const insurancePolicySchema = new mongoose.Schema({
  InsuranceID: {
    type: Number,
    required: true,
    unique: true,
  },
  EmployeeID: {
    type: Number,
    required: true,
    ref: "Employee", // Reference to Employee collection
  },
  InsuranceType: {
    type: String,
    required: true,
  },
  PolicyStartDate: {
    type: Date,
    required: true,
  },
  PolicyTerm: {
    type: Number,
    required: true,
  },
  PolicyEndDate: {
    type: Date,
    required: true,
  },
  ClaimLimit: {
    type: Number,
    required: true,
  },
  RemainingClaimLimit: {
    type: Number,
    required: true,
  },
});

const InsurancePolicy = mongoose.model("InsurancePolicy", insurancePolicySchema);

module.exports = InsurancePolicy;