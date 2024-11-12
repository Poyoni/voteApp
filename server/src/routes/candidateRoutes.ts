import express from 'express';
import Candidate from '../models/Candidate';

const router = express.Router();


router.get('/', async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

export default router;