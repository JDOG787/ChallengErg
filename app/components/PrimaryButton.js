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
        backgroundColor: "#03dac5",
        padding: 16,
        paddingHorizontal: 34,
        borderRadius: 50,
        margin: 8
    },
    buttonText: {   
        color: "black",
        fontSize: 18,
        textAlign: "center"
    }
});