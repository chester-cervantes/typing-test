import mongoose from "mongoose";

const scoresSchema = mongoose.Schema({
    score: Number,
});

const Score = mongoose.model('Score', scoresSchema);

export default Score;