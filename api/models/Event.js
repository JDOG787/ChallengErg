import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    name: String,
    route: [
        {
            latitude: Number,
            longitude: Number
        }
    ],
    racers: [
        {
            name:String,
            distanceTraveled: Number
        }
    ]
});

const Event = mongoose.model('Event', schema);

export default Event;