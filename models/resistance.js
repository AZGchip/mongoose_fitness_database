//required 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Resistance = new Schema({
    type:{
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        unique:true,
        required: false
    },
    duration: {
        type: Number,
        trim: true,
        required: false
    },
    weight:{
        type: Number,
        trim: true,
        required: false
    },
    reps:{
        type: Number,
        trim: true,
        required: false
    },
    sets:{
        type: Number,
        trim: true,
        required: false
    },
});
const resistModel = mongoose.model("resistModel", Resistance);
module.exports = resistModel;