import { View, Text, StyleSheet, pick } from 'react-native';

export default Summary = () => {
    return (
        <View style={styles.summary}>
            <Text style={styles.summaryHeader}>120,594m</Text>
            <Text style={styles.goal}>out of 1,000,000</Text>
            <Text style={styles.eventName}>Grand Canyon River</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    summary: {
        backgroundColor: "#1f1f1f",
        padding: 18,
        borderRadius: 10,
        marginBottom: 18
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