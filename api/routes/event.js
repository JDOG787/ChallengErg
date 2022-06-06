import express from 'express';
import Event from '../models/Event.js';
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('GET /events');
    // delay for 3seconds to simulate a slow server

    const event = await Event.find({});
    res.json(event);
});

export default router;