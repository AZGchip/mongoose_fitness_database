const db = require("./models/workout")
const path = require("path")

module.exports = function (app) {
    //updates contents of created row 
    app.put("/api/workouts/:id", function (req, res) {
        let id = req.params.id;
        let rB = req.body;
        let updateContents;
        //if resistance
        if (req.body.type === "resistance") {
            updateContents = {
                type: rB.type,
                name: rB.name,
                duration: rB.duration,
                weight: rB.weight,
                reps: rB.reps,
                sets: rB.sets
            }
        }
        //if cardio
        else if (req.body.type === "cardio") {
            updateContents = {
                type: rB.type,
                name: rB.name,
                duration: rB.duration,
                distance: rB.distance

            }
        }

        //updates a row with a matching id with the contents of the req.body
        db.findOneAndUpdate({ _id: req.params.id }, {
            $push: {
                exercises: updateContents
            }
        })
            .then(data => {
                res.json(data)
            })
    })

    //returns workouts and adds workout duration 
    app.get("/api/workouts", (req, res) => {
        db.find({})
            .then(data => {
                let workout = data
                for (let i = 0; i < workout.length; i++) {
                    let total = 0;
                    for (let x = 0; x < workout[i].exercises.length; x++) {
                        total += workout[i].exercises[x].duration;

                    };
                    workout[i].totalDuration = total;
                }
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    //returns all workouts 
    app.get("/api/workouts/range", function (req, res) {
        db.find({})
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });
    });
    //creates empty model
    app.post("/api/workouts", (req, res) => {
        db.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err)
            })
    });

    //html routes
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/exercise.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/stats.html"));
    });

}