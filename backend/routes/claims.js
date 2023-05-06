const express = require('express')
const Workout = require('../models/workoutModel')
const {
    getEmployees
} = require('../controllers/claimController')

const router = express.Router()

// GET all employees
router.get('/', getEmployees)

//POST 
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    try { 
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
    } catch (error) {

    }
    res.json({mssg: 'POST a new workout'})
})

module.exports = router