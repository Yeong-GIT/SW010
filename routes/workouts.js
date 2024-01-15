const express = require('express')//Express package
const Workout = require('../models/workoutModel')//
const router = express.Router()//Instance of the route, to use router.#####

//Definition from server.js (app.use)
//Get all workouts after /api/workouts
router.get('/', (req, res) => {// /api/workouts/
    res.json({mssg: 'Get all workouts'})//send some json back as response
})

//Get single workouts
router.get('/:id', (req, res) => { // /api/workouts/id
    res.json({mssg: 'Get a single workout'})
})

//POST a new workout
router.post('/', async (req, res) =>{ // /api/workouts/id
    // const {title, load, reps} = req.body
    // try {
    //     const workout = await Workout.create({title, load, reps})
    //     res.status(200).json(workout)
    // }catch (error){
    //     res.status(400).json({error: error.message})
    // }
    res.json({mssg: 'Post a single workout'})
})

//DELETE a new workout
router.delete('/:id', (req, res) => { // /api/workouts/id
    res.json({mssg: 'Delete a workout'})
})

//UPDATE a new workout
router.patch('/:id', (req, res) => { // /api/workouts/id
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router//export the router