import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";

export default EventCard = ({ name, navigation }) => {
    return (
        <View style={styles.eventCard}>
            <Text style={styles.eventName}>{name}</Text>
            <Text style={styles.eventDate}>May 10 - Jun 10</Text>
            <View style={styles.info}>
                <Text style={styles.infoText}>Users registered: 34</Text>
                <Text style={styles.infoText}>Distance: 100,000m</Text>
            </View>
            <PrimaryButton text="Register" onPress={() => navigation.navigate('Race')} />
        </View>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        backgroundColor: "#252525",
        borderRadius: 10,
        padding: 16,
        width: "100%",
        marginTop: 16,
        // height: "100%",
        // justifyContent: "center",
        // alignItems: "center",
    },
    eventName: {
        fontSize: 30,
        color: "white",
        fontFamily: "700",
    },
    eventDate: {
        fontSize: 18,
        color: "white",
        fontFamily: "600",
    },
    info: {
        marginTop: 16,
        // marginBottom: 16,
    },
    infoText: {
        fontSize: 22,
        color: "white",
        fontFamily: "600",
    },
});
