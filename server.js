const mongoose = require("mongoose");
const express = require("express")
const resistance = require("./models/resistance");
var app = express();
var PORT = 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require("./routes")(app);

    //app listener
    app.listen(PORT, function() {
        console.log("App listening on PORT http://localhost:" + PORT);
      });