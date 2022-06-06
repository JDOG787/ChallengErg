import jwt from "jsonwebtoken";
import User from '../models/User.js';


export const signup = async (req, res) => {
    let { name, email, password } = req.body;
    if (!name || !email || !password) return res.send({ success: false, error: "Please enter all fields." });
    email = email.toLowerCase();
    const user = await User.findOne({ email });
    if (user) return res.send({ success: false, error: "Email is already in use" });
    const newUser = await User.create({
        name,
        email,
        password
    });
    const token = await jwt.sign({ id: newUser._id }, process.env.SECRET);
    res.json({success: true, token});
}

export const login = async (req, res) => {
    let { email, password } = req.body;
    if (!email || !password) return res.send({ success: false, error: "Please enter all fields." });
    email = email.toLowerCase();
    const user = await User.findOne({ email });
    if (!user) return res.send({ success: false, error: "Account doesn't exist." });
    if (user.password !== password) return res.send({ success: false, error: "Incorrect password." });
    const token = await jwt.sign({ id: user._id }, process.env.SECRET);
    res.json({success: true, token});
}