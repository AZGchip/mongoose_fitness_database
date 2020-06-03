//required 
import mongoose from "mongoose";
const schema = mongoose.Schema;

const resistance = new Schema({
    type:{
        type: String,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
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

