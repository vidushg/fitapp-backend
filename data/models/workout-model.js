const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const Exercise = new Schema(
    {
        name: {type: String, required: true},
        setsXreps: {type: String, required: true},
        musclesWorked: {type: [String], required: true},
        maxWeight: {type: Number, required: true},
    },
    {timestamps: true},
)

module.exports = mongoose.model('exercises', Exercise)