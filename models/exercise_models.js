const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = new Schema({
    day: { type: Date },
    exercises: Array
});
const exerciseModel = mongoose.model("exerciseModel", Exercise);
module.exports = workoutModel;