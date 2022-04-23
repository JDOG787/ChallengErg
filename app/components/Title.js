import { Text, StyleSheet, View } from "react-native";

export default function Title({ text }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        textAlign: "left"
    },
    title: {
        color: "white",
        fontSize: 30,
        fontFamily: "800",
        marginBottom: 10,
        marginTop: 10
    }
});