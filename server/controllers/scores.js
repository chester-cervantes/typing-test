import mongoose from "mongoose";
import Score from "../models/scores.js";


export const getScores = async (req, res) => {
    try {
        
        const scores = await Score.find();
        res.status(200).json(scores);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const postScore = async (req, res) => {
    const score = req.body;

    const newScore = new Score(score);
    try {
        await newScore.save()
        res.status(201).json(newScore);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
