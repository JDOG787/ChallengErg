import mongoose from 'mongoose';

export default async () => {
    // Connect to MongoDB
    mongoose.connect('mongodb://root:example@localhost:27017/test?authSource=admin')

    // check connection
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    })
}