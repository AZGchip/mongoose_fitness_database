const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//workout model
const WorkoutModel = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: {
        type: Array,
        required: false
    },
    totalDuration: {
        type: Number,
        required: false
    }

});
const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;
