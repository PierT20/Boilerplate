const express = require('express')
const {
    getEmployees
} = require('../controllers/claimController')

const router = express.Router()

// GET all employees
router.get('/', getEmployees)



module.exports = router