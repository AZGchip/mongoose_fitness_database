
const db = require("./models/model_hub")
const path = require("path")
module.exports = function (app) {
    //updates contents of created row 
    app.put("/api/workouts/:id", function (req, res) {
        console.log("post data: ");
        console.log(req.body);
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
        db.Workout.findOneAndUpdate({ _id: req.params.id }, {
            $push: {
                exercises: updateContents
            }
        })
            .then(data => {
                res.json(data)
            })
    })

    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/exercise.html"));
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})

            .then(data => {
                let workout = data
                console.log("this is what is being sent" + workout)


                for (let i = 0; i < workout.length; i++) {
                    let total = 0;
                    if (workout[i].exercises.duration) {
                        for (let x = 0; x < workout[i].exercises.length; x++) {
                            total += workout[i].exercises[x].duration;
                            console.log("total:" + total);
                        };

                    }
                    workout[i].totalDuration = total;
                }




                console.log("this is what is being sent after", workout)
                res.json(workout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
            .then(workouts => {
                res.json(workouts);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/index.html"));
    });
    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "./public/stats.html"));
    });
    app.post("/api/workouts", (req, res) => {

        db.Workout.create(req.body)
            .then(data => {
                console.log(data)
                res.json(data);
            })
            .catch(err => {
                res.json(err)
            })
        // db.Activity.create(body)
        //     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Activity: _id } }, { new: true }))
        //     .then(data => {
        //         res.json(data);
        //     })
        //     .catch(err => {
        //         res.json(err);
        //     });
    });
}