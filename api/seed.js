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
    const event = await Event.create({
        name: 'English Channel',
        description: 'Very long body of water: English Channel',
        distance: 10500,
        startDate: new Date(),
        // june 6 2022 at 12:00
        endDate: new Date(2022, 5, 6, 12, 0, 0, 0),
        fromLocation: 'London',
        toLocation: 'Paris',
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
    const event2 = await Event.create({
        name: 'The Great Lakes',
        description: 'So many beatiful lakes to waiting to be rowed',
        distance: 21000,
        startDate: new Date(),
        endDate: new Date("2022-06-09"),
        fromLocation: 'Michigan',
        toLocation: 'Florida',
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
    user.events = [event._id, event2._id]
    user.save();

    const log = await Log.create({
        distance: 1000,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-05")
    });

    const log5 = await Log.create({
        distance: 12000,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-04")
    });

    const log2 = await Log.create({
        distance: 1400,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-03")
    });

    const log3 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-02")
    });

    const log4 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event2._id,
        date: new Date("2022-06-01")
    });

    const log6 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event2._id,
        date: new Date("2022-05-01")
    });

    user.logs = [log._id, log2._id, log3._id, log4._id, log5._id, log6._id]
    user.save();
    

    
    console.log('Seeded the db');
}

