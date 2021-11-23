import express from 'express';

import { getScores, postScore } from '../controllers/scores.js';

const router = express.Router();

router.get('/', getScores);
router.post('/', postScore);

export default router;