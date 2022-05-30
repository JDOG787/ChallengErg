import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { accentNegativeDefault } from "../lib/colors";

export default function Error({ error }) {
    if (!error) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Ionicons name="close" size={16} color={accentNegativeDefault} />
            <Text style={styles.text}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#d32f2fd6",
        // padding: 6,
        // borderRadius: 5,
        // marginBottom: 10,
        // borderColor: "#e43c3cd6",
        // borderWidth: 1,
        display: "flex",
        flexDirection: "row",  
        alignItems: "center",
        // marginVertical: 10

    },
    text: {
        color: accentNegativeDefault,
        fontSize: 14,
        fontFamily: "600",
        marginLeft: 10,
    }
});