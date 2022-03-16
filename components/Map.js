import React, {useEffect, useState} from 'react';
import {
StyleSheet,
Text,
View,
} from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';


const styles = StyleSheet.create({
  map: {
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',

  }
});


const Map = (props) => {
  // const [line, setLine] = useState([]);
  // const [points, setPoints] = useState([]);

  // useEffect(() => {

  //   axios('https://Challengerg-API.jdog787.repl.co', {
  //     method: "GET"
  //   })
  //   .then(res => {
  //     console.log("ran")
  //       setLine(res.data.route);
  //       const geoLine = []
  //       line.map((li) => {
  //         geoLine.push([li.latitude, li.longitude])
  //       })
  //       const l = turf.lineString(geoLine)

  //       const length = turf.length(l, {units: 'degrees'});

  //       const racers = res.data.racers;



  //   })
  //   .catch(err => {
  //       console.log(err);
  //   })
  //   console.log("-------")
  //   console.log(points)
  //   console.log("-------")
  // }, []);


  return (
    <MapView style={styles.map}>
          <Polyline
            coordinates={props.line}
            strokeColor="#000" 
            strokeWidth={6}
          />
          {
            props.points.map((p, i) => {
              return <Marker coordinate={{longitude: p[1], latitude: p[0]}} key={i}>
                <View style={{backgroundColor: "rgba(255,255,255,0.8)", padding: 5, borderRadius: 50}}>
                  <Text>DH</Text>
                </View>
              </Marker>
            })
          } 
    </MapView>  
  );

  // return <Text>FART</Text>
};

export default Map;