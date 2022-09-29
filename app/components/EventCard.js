import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { backgroundSecondaryDefault, backgroundTertiaryDefault, foregroundPrimaryDefault} from "../lib/colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import { MONTHS_OF_THE_YEAR } from "../lib/constants";

export default EventCard = ({ name, from, to, distance, users, start, end, navigation }) => {
    return (
        <View style={styles.eventCard}>
            <ParagraphAccent>{name}</ParagraphAccent>
            <View style={styles.fromTo}>
                <Text style={styles.fromToText}>{from} </Text>
                <Ionicons name="caret-forward-outline" size={24} color={foregroundPrimaryDefault} />
                <Text style={styles.fromToText}> {to}</Text>
            </View>
            <View style={styles.eventTags}>
                <View style={styles.eventTag}>
                    <Ionicons size={16} name="map" color={foregroundPrimaryDefault}/>
                    <Text style={styles.tagText}>{distance}m</Text>
                </View>
                <View style={styles.eventTag}>
                    <Ionicons size={16} name="time" color={foregroundPrimaryDefault}/>
                    <Text style={styles.tagText}>{MONTHS_OF_THE_YEAR[new Date(start).getMonth()]} {new Date(start).getDate()} - {MONTHS_OF_THE_YEAR[new Date(end).getMonth()]} {new Date(end).getDate()}</Text>
                </View>
                <View style={styles.eventTag}>
                    <Ionicons size={16} name="people" color={foregroundPrimaryDefault}/>
                    <Text style={styles.tagText}>{users} Registered</Text>
                </View>
            </View>
            <PrimaryButton>Register</PrimaryButton>
            <TertiaryButton onPress={() => navigation.navigate("Race")}>View event</TertiaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        // backgroundColor: "#252525",
        // borderRadius: 10,
        // padding: 16,
        // width: "100%",
        // marginTop: 16,
        // // height: "100%",
        // // justifyContent: "center",
        // // alignItems: "center",
        backgroundColor: backgroundSecondaryDefault, 
        padding: 16, 
        marginTop: 32, 
        // marginBottom: 60, 
        borderRadius: 16
    },
    fromTo: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 16,
        color: foregroundPrimaryDefault
    },
    fromToText: {
        fontSize: 16,
        color: foregroundPrimaryDefault
    },
    eventTags: { 
        // flex: 1,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",

    },
    eventTag: {
        backgroundColor: backgroundTertiaryDefault,
        borderRadius: 50,
        paddingVertical: 4,
        paddingHorizontal: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        marginTop: 8
    },
    tagText: {
        color: foregroundPrimaryDefault,
        fontSize: 16,
        marginLeft: 6
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
