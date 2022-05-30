import express from 'express';
import Log from '../models/Log.js';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.get("/", async (req, res) => {
    const token = req.headers['authorization'];
    console.log(token);
    // decrpyt token
    const payload = jwt.verify(token, 'SECRET');
    // get user from token
    console.log(payload.id);

    const logs = await Log.find({user: payload.id});

    res.send(logs);
})

router.post('/add', async (req, res) => {
    console.log("add log");
    // get token from header
    const token = req.headers['authorization'];
    console.log(token);
    // decrpyt token
    const payload = jwt.verify(token, 'SECRET');
    // get user from token
    console.log(payload.id);

    const { distance } = req.body;
    const user = await User.findById(payload.id);
    console.log(user);
    const log = new Log({
        distance: distance,
        user: user._id
    });
    await log.save();
    res.send(log);
});

export default router;