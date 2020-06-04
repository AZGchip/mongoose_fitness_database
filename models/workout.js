//required 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
    day: { type: Date },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
      }]
});
const workoutModel = mongoose.model("workoutModel", Workout);
module.exports = workoutModel;
// [{
//     type: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     name: {
//         type: String,
//         trim: true,
//         unique: true,
//         required: false
//     },
//     duration: {
//         type: Number,
//         trim: true,
//         required: false
//     },
//     weight: {
//         type: Number,
//         trim: true,
//         required: false
//     },
//     reps: {
//         type: Number,
//         trim: true,
//         required: false
//     },
//     sets: {
//         type: Number,
//         trim: true,
//         required: false
//     }
// }]