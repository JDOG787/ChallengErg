import { StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { backgroundPrimaryDefault, backgroundSecondaryDefault, backgroundTertiaryDefault, foregroundPrimaryDefault } from "../lib/colors";

export default TertiaryButton = props => {
    return (
        <TouchableOpacity
        // style={styles.button}
        onPress={props.onPress}
        style={[styles.button, props.style ]}
        >
                <Text style={styles.buttonText}>{props.children || props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: backgroundTertiaryDefault,
        padding: 12,
        paddingHorizontal: 34,
        borderRadius: 16    ,
        marginTop: 22,
        // width: "100%"
        // flex: 1
    },
    buttonText: {   
        color: foregroundPrimaryDefault,
        fontSize: 20,
        textAlign: "center",    
        fontFamily: "700"
    }
});