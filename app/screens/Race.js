import { Button, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import calcPoints from '../lib/calcPoints';
import * as turf from '@turf/turf';
import Map from '../components/Map';

export default Race = ({ navigation }) => {
    const [data, setData] = useState()
    useEffect(() => {
        axios('http://192.168.132.15:8080/events/', {
            method: "GET"
        })
        .then(res => {
            setData(res.data.event);
        })
    }, [])

    if (data) {
        const line = data.route;
        console.log(line)
        const geoLine = []
        line.map((li) => {
          geoLine.push([li.latitude, li.longitude])
        })
        const l = turf.lineString(geoLine)

        const length = turf.length(l, {units: 'degrees'});

        const racers = data.racers;
        const points = calcPoints(racers, geoLine, length)
        return  (
            <View style={{height: "100%"}}>
                <TouchableOpacity style={{position: "absolute", zIndex: 9, top: 20, left: 6}} onPress={() => navigation.navigate('Events')}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <Map line={line} points={points}/>
            </View>
        )
    } else {
        return (
            <Text>RACE</Text>
        )
    }
}