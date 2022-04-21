import express from 'express';
import jwt from "jsonwebtoken";
import User from '../models/User.js';
const router = express.Router();


router.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send("Please enter an email and password");
    const user = await User.findOne({ email });
    if (user) return res.status(400).send("Email is already in use");
    const newUser = new User({
        email,
        password
    });
    const token = await jwt.sign({email: newUser.email}, "SECRET");
    console.log("authed")
    res.json({success: true, token});
});

export default router;