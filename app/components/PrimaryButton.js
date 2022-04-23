import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default PrimaryButton = props => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4dc3ff",
        padding: 12,
        paddingHorizontal: 34,
        borderRadius: 50,
        marginTop: 22
    },
    buttonText: {   
        color: "black",
        fontSize: 20,
        textAlign: "center",
        fontFamily: "700"
    }
});