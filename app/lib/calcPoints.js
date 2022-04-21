import * as turf from '@turf/turf';
export default function calcPoints(racers, geoLine, length) {
    let racerPoints = []
    for (let x = 0; x < racers.length; x++) {
      let d  = racers[x].distanceTraveled / 111000;
      let pointX;
      let pointY;
      if (d < length) {
          for (let i = 0; i < geoLine.length - 1; i++) { 
          const l = turf.lineString([geoLine[i], geoLine[i + 1]]);
          const lLength = turf.length(l, {units: 'degrees'});
          if (lLength > d) {
              // console.log("ran", i)
              const t = d / lLength;
              // console.log(lLength, d)
              pointX = ((1 - t) * geoLine[i][0]) + (t * geoLine[i + 1][0]);
              pointY = ((1 - t) * geoLine[i][1]) + (t * geoLine[i + 1][1]);
              break
          } else {
              d -= lLength;
          }
          }
      } else {
          pointX = geoLine[geoLine.length-1][0];
          pointY = geoLine[geoLine.length-1][1];
      }
      console.log(pointX, pointY)
      racerPoints.push({cords: [pointX, pointY], racer: racers[x].name});
      // setPoints(old => [...old, newPoint]);

    }
    return racerPoints;
}