const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.post("/user/signup", async (req, res) => {
    const token = await jwt.sign({username: "JDOG", id: 2}, "SECRET");
    res.json({success: true, token});
})

app.listen(8080)