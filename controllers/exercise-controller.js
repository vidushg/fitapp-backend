const Exercise = require('../data/models/workout-model')

createExercise = (req, res) => {
    const body = req.body;

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'invalid input, please provide an exercise!',
        })
    }

    const exercise = new Exercise(body)

    if(!exercise){
        return res.status(400).json({success:false, error: err})
    }

    exercise
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: exercise._id,
                message: 'Exercise created',
            })
        })
        .catch (error => {
            return res.status(400).json({
                error,
                message: 'Exercise not created'
            })
        })
}

getExercises = async (req, res) => {
    await Exercise.find({}, (err, exercises) => {
        if (err){
            return res.status(400).json({success: false, error: err})
        }
        if (!exercises.length){
            return res.status(404).json({success: false, error: 'Exercises not found'})
        }

        return res.status(200).json({success: true, data: exercises})
    }).clone().catch (err => console.log(err))
}

module.exports = {
    createExercise,
    getExercises,
}