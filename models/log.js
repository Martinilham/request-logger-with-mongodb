import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  ip: { type: String, require: true },
  method: { type: String, require: true },
  endpoint: { type: String, require: true },
  device: { type: String, default: null },
  user: { type: String, default: null },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("Log", logSchema);
