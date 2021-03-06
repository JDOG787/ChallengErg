import { StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { backgroundPrimaryDefault, backgroundSecondaryDefault, backgroundTertiaryDefault, foregroundPrimaryDefault } from "../lib/colors";

export default SecondaryButton = props => {
    return (
        <TouchableOpacity
        // style={styles.button}
        onPress={props.onPress}
        style={styles.button}
        >
                <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: backgroundSecondaryDefault,
        padding: 12,
        paddingHorizontal: 34,
        borderRadius: 16    ,
        marginTop: 22,
        // width: "100%"
    },
    buttonText: {   
        color: foregroundPrimaryDefault,
        fontSize: 20,
        textAlign: "center",    
        fontFamily: "700"
    }
});