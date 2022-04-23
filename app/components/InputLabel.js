import { Text, StyleSheet } from "react-native";

export default function InputLabel({ text }) {
    return (
        <Text style={styles.label}>
        {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    label: {
        color: "white",
        fontSize: 18,
        width: "100%",
        fontFamily: "700",
        // backgroundColor: "blue",
    }
});