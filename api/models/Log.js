import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    distance: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now   
    }
});

export default mongoose.model('Log', schema);