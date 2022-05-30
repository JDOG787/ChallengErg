import express from 'express';
import jwt from "jsonwebtoken";
import User from '../models/User.js';
const router = express.Router();


router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.send({ success: false, error: "Please enter all fields." });

    const user = await User.findOne({ email });
    if (user) return res.send({ success: false, error: "Email is already in use" });
    const newUser = new User({
        name,
        email,
        password
    });
    newUser.save()
    const token = await jwt.sign({ id: newUser._id }, "SECRET");
    console.log("authed")
    res.json({success: true, token});
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.send({ success: false, error: "Please enter all fields." });
    const user = await User.findOne({ email });
    if (!user) return res.send({ success: false, error: "Account doesn't exist." });
    if (user.password !== password) return res.send({ success: false, error: "Incorrect password." });
    const token = await jwt.sign({ id: user._id }, "SECRET");
    console.log("authed")
    res.json({success: true, token});
});

export default router;