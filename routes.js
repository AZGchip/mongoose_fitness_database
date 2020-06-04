
const Workout = require("./models/workout")
const path = require("path")
module.exports = function (app) {
    app.put("/api/workouts/:id", function (req, res) {
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

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/exercise.html"));
    });

    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });

    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
    app.post("/api/workouts/", function (req, res) {
        Workout.create(req.body.data)
            .then(data => {
                console.log(data);
                res.json(data)
            })
            .catch(({ message }) => {
                console.log(message);
            });
    })
}