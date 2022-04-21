import Event from './models/Event.js';


export default async () => {
    await Event.deleteMany({});
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
            {
            name: 'Silly Person',
            distanceTraveled: 200
            },
            {
            name: 'JDOG787',
            distanceTraveled: 1200000
            },
            {
                name: 'awesome',
                distanceTraveled: 3000000
            }
        ]
    });
    console.log('Seeded the db');
}

