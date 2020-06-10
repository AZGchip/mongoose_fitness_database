const mongoose = require("mongoose");
const express = require("express")
const resistance = require("./models/workout");
var app = express();
var PORT = process.env.PORT || 7000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true,useFindAndModify:false });

require("./routes")(app);

    //app listener
    app.listen(PORT, function() {
        console.log("App listening on PORT http://localhost:" + PORT);
      });