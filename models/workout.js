//required 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
// WorkoutModel.methods.setTotalDuration = function() {
//     this.totalDuration = addUp(this.exercises);
    
//     return this.totalDuration;
//   };
function addUp(exercises){
    let total = 0 ;
exercises.forEach(element => {
  
   total += element.duration;
});
return total; 
}
const Workout = mongoose.model("Workout", WorkoutModel);
module.exports = Workout;
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