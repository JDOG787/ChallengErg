import express from 'express';
import Event from '../models/Event.js';
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('GET /events');
    const event = await Event.find();
    res.json({
        event: event[0],
    });
});

export default router;