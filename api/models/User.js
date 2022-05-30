import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    logs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Log"
        }
    ],
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});

const User = mongoose.model('User', schema);

export default User;