const mongoose = require("mongoose");

const resistance = require("./models/resistance");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const data = {
    type: "resistance",
    name: "Bicep Curl",
    duration: 20,
    weight: 100,
    reps: 10,
    sets: 4
}
//form input 

resistance.create(data)
    .then(dbExample => {
        console.log(dbExample);
    })
    .catch(({ message }) => {
        console.log(message);
    });
