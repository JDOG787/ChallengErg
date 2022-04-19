const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect("mongodb://root:example@localhost:27017/test?authSource=admin")

const Event = mongoose.model('Event', { 
  name: String ,
  route: [
    {
      latitude: String,
      latitude: String
    }
  ],
  racers: [
    {
      name:String,
      distanceTraveled: Number
    }
  ]
});



app.get("/", async (req, res) => {
    
    const event = await Event.find();
    res.json(event);
})

app.post("/user/signup", async (req, res) => {
    const token = await jwt.sign({username: "JDOG", id: 2}, "SECRET");
    res.json({success: true, token});
})

app.listen(8080)