import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import eventRouter from './routes/event.js';
import logRouter from './routes/log.js';
import Event from './models/Event.js';
import seed from './seed.js';
const app = express();

// Middleware
app.use(express.json());
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/logs', logRouter);

// Connect to MongoDB
seed();
mongoose.connect('mongodb://root:example@localhost:27017/test?authSource=admin')



app.listen(8080, () => {
    console.log('Server started at: http://localhost:8080');
})
