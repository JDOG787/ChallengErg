import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Error({ error }) {
    if (!error) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Ionicons name="alert-circle" size={20} color="white" />
            <Text style={styles.text}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d32f2fd6",
        padding: 6,
        borderRadius: 5,
        marginBottom: 10,
        borderColor: "#e43c3cd6",
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",  
        alignItems: "center",
        marginVertical: 10

    },
    text: {
        color: "white",
        fontSize: 16,
        fontFamily: "600",
        marginLeft: 10,
    }
});