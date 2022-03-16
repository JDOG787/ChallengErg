import { SafeAreaView, Text, View } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import calcPoints from '../lib/calcPoints';
import * as turf from '@turf/turf';
import Map from '../components/Map';




export default function Event() {
    const [data, setData] = useState()
    useEffect(() => {
        axios('https://Challengerg-API.jdog787.repl.co', {
            method: "GET"
        })
        .then(res => {
            setData(res.data)
        })
    }, [])

    if (data) {
        const line = data.route;
        const geoLine = []
        line.map((li) => {
          geoLine.push([li.latitude, li.longitude])
        })
        const l = turf.lineString(geoLine)

        const length = turf.length(l, {units: 'degrees'});

        const racers = data.racers;
        const points = calcPoints(racers, geoLine, length)
        return  <Map line={line} points={points}/>;
    } else {
        return (
            <SafeAreaView>
                <Text>LOADING!!!!</Text>
                {/* <Map/> */}
            </SafeAreaView>
        ) 
    }
}