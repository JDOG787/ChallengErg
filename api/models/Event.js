import mongoose from 'mongoose';

const schema = new mongoose.Schema({ 
    name: String,
    description: String,
    route: [
        {
            latitude: Number,
            longitude: Number
        }
    ],
    racers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Event = mongoose.model('Event', schema);

export default Event;