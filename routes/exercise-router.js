const express = require ('express')

const ExerciseController = require ('../controllers/exercise-controller')

const router = express.Router();

router.post('/addExercises', ExerciseController.createExercise)
router.get('/getAllExercises', ExerciseController.getExercises)

module.exports = router