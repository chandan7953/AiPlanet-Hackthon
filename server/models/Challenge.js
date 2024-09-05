// models/Challenge.js
import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
  challengeName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // URL of the image in Cloudinary
  levelType: { type: String, enum: ["Easy", "Medium", "Hard"], required: true },
});

const Challenge = mongoose.model("Challenge", ChallengeSchema);

export default Challenge;
