import { connect } from "mongoose";

import resistance from "./models/resistance";

connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
