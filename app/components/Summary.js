import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react';
import { backgroundSecondaryDefault, foregroundPrimaryDefault, foregroundSecondaryDefault } from '../lib/colors';
import ParagraphAccent from './ParagraphAccent';
import HeaderSmall from './HeaderSmall';
import { LineChart } from "react-native-chart-kit";

export default Summary = ({ logs }) => {

    return (
        // <View>
        <View style={styles.summary}>

            <LineChart
                data={{
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        data: logs
                    },
                ]
                }}
                width={Dimensions.get("window").width - 84} // from react-native
                height={210}
                onDataPointClick={({ value, dataset, getColor }) => console.log(value, dataset, getColor)}
                // yAxisLabel="$"
                yAxisSuffix="km"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#262626",
                backgroundGradientFrom: "#262626",
                backgroundGradientTo: "#262626",
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#262626",
                    
                }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    // paddingRight: 0
                }}
            />


            {/* <LineGraph
            points={[1, 2, 3]}
            /> */}
    </View>
    );
}

const styles = StyleSheet.create({
    summary: {
        backgroundColor: backgroundSecondaryDefault,
        paddingHorizontal: 16,
        paddingTop: 6,
        borderRadius: 16,
    },
    days: {

    },
    day: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        width: '100%',
        // padding: 8,
    },
    dayofTheWeek: {
        fontSize: 18,
        color: foregroundPrimaryDefault,
        justifyContent: "flex-start",
        fontWeight: '500',
    },
    distance: {
        fontSize: 18,
        color: foregroundSecondaryDefault,


    },
    summaryHeader: {
        fontSize: 42,
        color: "#03dac5",
        textShadowColor: "#03dac5",
        textShadowOffset: {x: 0, y: 0},
        textShadowRadius: 8,
        fontFamily: "800",
    },
    goal: {
        fontSize: 22,
        color: "#d6d6d6",
        fontFamily: "700",
    },
    eventName: {
        fontSize: 22,
        color: "#d6d6d6",
        fontFamily: "400",
    }
});