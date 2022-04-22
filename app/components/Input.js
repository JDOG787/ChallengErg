import { TextInput, StyleSheet } from "react-native";

export default Input = props => {
    return (
        <TextInput
        {...props}
        placeholder={props.placeholder}
        placeholderTextColor="#eee"
        style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        backgroundColor: "#262626",
        borderColor: "#5f5f5f",
        borderWidth: 1,
        margin: 10,
        fontSize: 18,
        paddingLeft: 14,
        color: "white",
        borderRadius: 8
    }
});
