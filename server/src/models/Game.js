import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength:[5,"Title too short"]
    },
    description: {
      type: String,
      required: true,
      minLength:[10,"Description too short"]
    },
    genre: {
      type: [String],   //first-person-shooter, horror,action, etc
    },
    dateReleased: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

export const Game = mongoose.model("Game", GameSchema);
