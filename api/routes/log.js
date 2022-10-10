import express from 'express';
import Log from '../models/Log.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import { isAuth } from '../middlewares/index.js';
const router = express.Router();

router.get("/", async (req, res) => {
    const token = req.headers['authorization'];
    console.log(token);
    // decrpyt token
    const payload = jwt.verify(token, process.env.SECRET);
    // get user from token
    console.log(payload.id);

    const logs = await Log.find({user: payload.id});

    res.send(logs);
})

router.post('/add', async (req, res) => {
    console.log("add log");
    // get token from header
    const token = req.headers['authorization'];
    // console.log(token);
    // decrpyt token
    const payload = jwt.verify(token, process.env.SECRET);
    // get user from token
    // console.log(payload.id);

    const { distance, eventId } = req.body;
    const user = await User.findById(payload.id);
    // console.log(user);
    const log = new Log({
        distance: distance,
        user: user._id,
        event: eventId
    });
    console.log(log);
    await log.save();
    res.send(log);
});

router.get("/pastweek", isAuth, async (req, res) => {
    console.log(res.locals.user);
    const logs = await Log.find({user: res.locals.user.id, 
        // date: {
        //     $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000)
        // }
    });
    console.log(logs)
    res.json({ success: true, logs });
});

export default router;