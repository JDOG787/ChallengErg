import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import eventRouter from './routes/event.js';
import logRouter from './routes/log.js';
import User from './models/User.js';
import Log from './models/Log.js';
import seed from './seed.js';
import {log, timeout} from './middlewares/index.js';
import init from './utils/init.js';
const app = express();

// Middleware
app.use(express.json());
app.use(log);
app.use(timeout);
app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/logs', logRouter);

// mongoose.connect('mongodb://root:example@localhost:27017/test?authSource=admin')

init()
// seed()

app.listen(3000, () => {
    console.log('Server started at: http://localhost:8080');
})
