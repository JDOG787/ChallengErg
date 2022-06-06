import { Button, SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import calcPoints from '../lib/calcPoints';
import * as turf from '@turf/turf';
import Map from '../components/Map';
import styles from '../styles/global';
import PageContainer from '../components/PageContainer';
import EventCard from '../components/EventCard';
import HeaderSmall from '../components/HeaderSmall';
import SeconaryButton from '../components/SecondaryButton';
import ParagraphAccent from '../components/ParagraphAccent';
import { backgroundSecondaryDefault } from '../lib/colors';
import PrimaryButton from '../components/PrimaryButton';
import TertiaryButton from '../components/TertiaryButton';
import { getEvents, getRegisteredEvents } from '../lib/functions';
import AuthContext from '../contexts/AuthContext';
import Loader from '../components/Loader';




export default function Event({ navigation }) {
    const [events, setEvents] = useState();
    const auth = useContext(AuthContext)

    useEffect(() => {
        getEvents(auth.authData)
            .then(res => {
                setEvents(res)
            })
    }, [])

    // if (data) {
    //     const line = data.route;
    //     console.log(line)
    //     const geoLine = []
    //     line.map((li) => {
    //       geoLine.push([li.latitude, li.longitude])
    //     })
    //     const l = turf.lineString(geoLine)

    //     const length = turf.length(l, {units: 'degrees'});

    //     const racers = data.racers;
    //     const points = calcPoints(racers, geoLine, length)
    //     return  <Map line={line} points={points}/>;
    // } else {
        return (

            <PageContainer>
                <HeaderSmall>Events</HeaderSmall>
                <SeconaryButton text="View main map"/>
                {
                    events ? events.map((e, i) => {
                        return <EventCard key={i} name={e.name} from={e.fromLocation} to={e.toLocation} distance={e.distance} start={e.startDate} end={e.endDate} users={e.racers.length}/>
                        // return <Text>ello</Text>
                    })
                    : <Loader/>
                }
                {/* <EventCard name={"Funn"}/> */}

            </PageContainer>
        ) 
    // }
}