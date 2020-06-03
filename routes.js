
const Workout = require("./models/resistance")
const path = require("path")
module.exports = function (app) {
    app.post("/api/workouts/:id", function (req, res) {
        console.log("post data: ");
        console.log(req.body);
        console.log(req.params.id)
        const rB = req.body;
        Workout.create({
            type: rB.type,
            name: rB.name,
            duration: rB.duration,
            weight: rB.weight,
            reps: rB.reps,
            sets: rB.sets
        })
            .then(dbExample => {
                console.log(dbExample);
            })
            .catch(({ message }) => {
                console.log(message);
            });
    })
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
      });

}