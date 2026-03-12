import express from 'express';
import { getMessage } from '../controllers/dbControllers.js';

const router = express.Router();

router.get('/api/message', getMessage);

export default router;