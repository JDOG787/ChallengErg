import React, {useEffect, useState} from 'react';
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert
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
              return <Marker onPress={() => Alert.alert('Simple Button pressed')} coordinate={{longitude: p.cords[1], latitude: p.cords[0]}} key={i}>
                  <TouchableOpacity
                    style={{ backgroundColor: "#000", width: 22, height: 22, display: "flex", justifyContent:"center", alignItems: "center", borderRadius: 50,}}
                    >
                      <Text style={{color: "white", fontSize: 12}}>{i.toString()}</Text>
                    </TouchableOpacity>
              </Marker>
            })
          } 
    </MapView>  
  );
};

export default Map;