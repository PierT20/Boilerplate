const mongoose = require("mongoose");

const insuranceClaimSchema = new mongoose.Schema({
  ClaimID: {
    type: Number,
    required: true,
    unique: true,
  },
  InsuranceID: {
    type: Number,
    required: true,
    ref: "InsurancePolicy", // Reference to InsurancePolicy collection
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  ExpenseDate: {
    type: Date,
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Purpose: {
    type: String,
    required: true,
  },
  FollowUp: {
    type: Boolean,
    required: true,
  },
  PreviousClaimID: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  LastEditedClaimDate: {
    type: Date,
    required: true,
  },
});

const InsuranceClaim = mongoose.model("InsuranceClaim", insuranceClaimSchema);

module.exports = InsuranceClaim;