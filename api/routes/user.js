import express from 'express';
import jwt from "jsonwebtoken";
import { login, signup } from '../controllers/authController.js';
import User from '../models/User.js';
const router = express.Router();


router.post("/signup", signup);

router.post("/login", login);

router.get("/events", async (req, res) => {
    const { authorization } = req.headers;
    console.log("auth", authorization)
    if (!authorization) return res.send({ success: false, error: "Please login." });
    const user = await User.findById(jwt.verify(authorization, process.env.SECRET).id).populate("Events").exec();
    if (!user) return res.send({ success: false, error: "Please login." });
    // const events = await user;
    console.log(user)
    res.json({success: true, events: user});
});

export default router;