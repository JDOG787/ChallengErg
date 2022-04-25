import { Button, SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import calcPoints from '../lib/calcPoints';
import * as turf from '@turf/turf';
import Map from '../components/Map';
import styles from '../styles/global';
import PageContainer from '../components/PageContainer';
import EventCard from '../components/EventCard';




export default function Event({ navigation }) {
    const [data, setData] = useState()
    useEffect(() => {
        axios('http://192.168.132.15:8080/events/', {
            method: "GET"
        })
        .then(res => {
            setData(res.data.event);
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
            // <SafeAreaView style={{padding: 50}}>
            //     <View style={{backgroundColor: "#121212", height: "100%", padding: 18}}>
            //         <Text style={styles.title}>Events</Text>
            //         <Text style={{fontSize: 28, color: "white", fontFamily: "600"}}>Registered</Text>
            //         {/* Event card */}
            //         <View>
            //             <View style={{backgroundColor: "#212121", height: "100%", padding: 18}}>
            //                 <Text style={styles.title}>Event 1</Text>
            //                 <Text style={{fontSize: 28, color: "white", fontFamily: "600"}}>Registered</Text>
            //                 <Text style={{fontSize: 18, color: "white", fontFamily: "600"}}>
            //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            //                     Donec euismod, nisi eget consectetur ultrices,
            //                 </Text>
            //             </View>
            //         </View>
            //     </View>
            // </SafeAreaView>
            <PageContainer>
                <Text style={styles.title}>Current</Text>
                <Text style={{fontSize: 28, color: "white", fontFamily: "600"}}>Registered</Text>
                {/* {
                    data !== undefined ? data.forEach(event => {
                        return (
                            <EventCard name={event.name}/>
                        )
                    })
                    : <Text>Loading</Text>
                } */}
                <EventCard name="Grand Canyon River" navigation={navigation}/>
                <EventCard name="Grand Canyon River"/>

                <Text style={{fontSize: 28, color: "white", fontFamily: "600"}}>Starting Soon</Text>
                <EventCard name="Grand Canyon River"/>



            </PageContainer>
        ) 
    // }
}