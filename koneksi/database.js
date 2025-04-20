import mongoose from "mongoose";

const DB = ``;

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("DATABASE connected"))
  .catch((err) => console.log("Error: " + err.message));

