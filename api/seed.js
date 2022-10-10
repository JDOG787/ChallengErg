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
                "latitude": 36.40002387818434,
                "longitude": -112.54873709425117
            },
            {
                "latitude": 36.40002387818434,
                "longitude": -112.54812148635693
            },
            {
                "latitude": 36.40002387818434,
                "longitude": -112.54774039575534
            },
            {
                "latitude": 36.39997668780626,
                "longitude": -112.54715410252248
            },
            {
                "latitude": 36.3999294973987,
                "longitude": -112.54665575327431
            },
            {
                "latitude": 36.40000028299929,
                "longitude": -112.54615740402612
            },
            {
                "latitude": 36.40000028299929,
                "longitude": -112.54577631342504
            },
            {
                "latitude": 36.399882306963335,
                "longitude": -112.54545385214671
            },
            {
                "latitude": 36.39981152125614,
                "longitude": -112.54501413222232
            },
            {
                "latitude": 36.399905902185,
                "longitude": -112.54445715365087
            },
            {
                "latitude": 36.39997668780626,
                "longitude": -112.54398811906457
            },
            {
                "latitude": 36.39997668780626,
                "longitude": -112.54357771380158
            },
            {
                "latitude": 36.40002387818434,
                "longitude": -112.54302073523013
            },
            {
                "latitude": 36.400047473363,
                "longitude": -112.54237581267398
            },
            {
                "latitude": 36.39997668780626,
                "longitude": -112.54190677808718
            },
            {
                "latitude": 36.3999294973987,
                "longitude": -112.54126185553106
            },
            {
                "latitude": 36.3997879260058,
                "longitude": -112.54076350628338
            },
            {
                "latitude": 36.399693544933626,
                "longitude": -112.54011858372672
            },
            {
                "latitude": 36.399575568431985,
                "longitude": -112.5395029758325
            },
            {
                "latitude": 36.39945074954602,
                "longitude": -112.5388171259176
            },
            {
                "latitude": 36.39941092642243,
                "longitude": -112.53832236708476
            },
            {
                "latitude": 36.39917198725456,
                "longitude": -112.53807498766835
            },
            {
                "latitude": 36.398933047352045,
                "longitude": -112.53772865648537
            },
            {
                "latitude": 36.39883348884308,
                "longitude": -112.53728337353581
            },
            {
                "latitude": 36.39867419496184,
                "longitude": -112.53681335264442
            },
            {
                "latitude": 36.39851490075485,
                "longitude": -112.53646702146142
            },
            {
                "latitude": 36.39839542988567,
                "longitude": -112.53604647645331
            },
            {
                "latitude": 36.398315782537296,
                "longitude": -112.53572488321218
            },
            {
                "latitude": 36.398116663808864,
                "longitude": -112.5351559105542
            },
            {
                "latitude": 36.39795736845913,
                "longitude": -112.53468588966278
            },
            {
                "latitude": 36.39781798476044,
                "longitude": -112.53421586877182
            },
            {
                "latitude": 36.39761886475668,
                "longitude": -112.53374584788043
            },
            {
                "latitude": 36.39745956838665,
                "longitude": -112.53335004081416
            },
            {
                "latitude": 36.39736000799009,
                "longitude": -112.53285528198133
            },
            {
                "latitude": 36.39706164984135,
                "longitude": -112.53259330141476
            },
            {
                "latitude": 36.39686742421621,
                "longitude": -112.5321559515462
            },
            {
                "latitude": 36.39664891980756,
                "longitude": -112.53159795343807
            },
            {
                "latitude": 36.396442553968384,
                "longitude": -112.5308439019405
            },
            {
                "latitude": 36.396387927624076,
                "longitude": -112.53008985044455
            },
            {
                "latitude": 36.39628474442692,
                "longitude": -112.52960725748629
            },
            {
                "latitude": 36.39606623838017,
                "longitude": -112.52885320598872
            },
            {
                "latitude": 36.395700155586795,
                "longitude": -112.52827554947402
            },
            {
                "latitude": 36.39544187161741,
                "longitude": -112.52774075997267
            },
            {
                "latitude": 36.39521802481596,
                "longitude": -112.52729153679151
            },
            {
                "latitude": 36.3950286154808,
                "longitude": -112.52690648835068
            },
            {
                "latitude": 36.39478754838615,
                "longitude": -112.52658561464979
            },
            {
                "latitude": 36.39459813800197,
                "longitude": -112.52632891568923
            },
            {
                "latitude": 36.39435706957285,
                "longitude": -112.52605082514845
            },
            {
                "latitude": 36.39415043889545,
                "longitude": -112.52585830092822
            },
            {
                "latitude": 36.3938749304705,
                "longitude": -112.52562299354751
            },
            {
                "latitude": 36.39370273720971,
                "longitude": -112.52549464406724
            },
            {
                "latitude": 36.39351332418211,
                "longitude": -112.52532351142686
            },
            {
                "latitude": 36.393255032945405,
                "longitude": -112.5251095956264
            },
            {
                "latitude": 36.393082838311415,
                "longitude": -112.52493846298601
            },
            {
                "latitude": 36.392858984716426,
                "longitude": -112.52468176402549
            },
            {
                "latitude": 36.392635130476776,
                "longitude": -112.52446784822502
            },
            {
                "latitude": 36.39239405595983,
                "longitude": -112.52418975768423
            },
            {
                "latitude": 36.39225629875651,
                "longitude": -112.52389027556357
            },
            {
                "latitude": 36.39217020038136,
                "longitude": -112.52359079344293
            },
            {
                "latitude": 36.392084101910186,
                "longitude": -112.52335548606223
            },
            {
                "latitude": 36.39194634415824,
                "longitude": -112.52303461236171
            },
            {
                "latitude": 36.39182580592514,
                "longitude": -112.52277791340077
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
        date: new Date("2022-06-30")
    });

    const log5 = await Log.create({
        distance: 12000,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-29")
    });

    const log2 = await Log.create({
        distance: 1400,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-28")
    });

    const log3 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event._id,
        date: new Date("2022-06-27")
    });

    const log4 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event2._id,
        date: new Date("2022-06-26")
    });

    const log6 = await Log.create({
        distance: 10000,
        user: user._id,
        event: event2._id,
        date: new Date("2022-06-25")
    });

    user.logs = [log._id, log2._id, log3._id, log4._id, log5._id, log6._id]
    user.save();
    

    
    console.log('Seeded the db');
}

