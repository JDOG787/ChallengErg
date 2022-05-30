import Event from './models/Event.js';
import Log from './models/Log.js';
import User from './models/User.js';


export default async () => {
    // Clear db
    await Event.deleteMany({});
    await User.deleteMany({});
    await Log.deleteMany({})

    const user = await User.create({
        username: 'JD_TEST',
        email: "hello@jdog.dev",
        password: "123"
    });
    await Event.create({
        name: 'Test Event',
        route: [
            {
                latitude: 40.7128,
                longitude: -74.0060
            },
            {
                latitude: 40.7228,
                longitude: -64.0060
            },
            {
                latitude: 42.7128,  
                longitude: -74.260
            }
        ],
        racers: [
            user._id
        ]
    });

    
    console.log('Seeded the db');
}

