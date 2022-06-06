import { StyleSheet, TouchableOpacity, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { backgroundPrimaryDefault } from "../lib/colors";

export default PrimaryButton = (props) => {
    return (
        <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={props.onPress}
        >
            <LinearGradient
                // Button Linear Gradient
                useAngle={true}
                angleCenter={{ x: 0.5, y: 0.5 }}
                // start={{x: 0, y: 0}}
                // end={{x: 1, y: 0.8}}
                angle={90}
                colors={['#3478F6', '#6EC0F9']}
                style={styles.button}
                >
                <Text style={styles.buttonText}>{props.children || props.text}</Text>
            </LinearGradient>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        // flex: 1
    },
    button: {
        backgroundColor: "#4dc3ff",
        padding: 12,
        paddingHorizontal: 34,
        borderRadius: 16    ,
        marginTop: 22,
        // width: "100%"
    },
    buttonText: {   
        color: backgroundPrimaryDefault,
        fontSize: 20,
        textAlign: "center",    
        fontFamily: "700"
    }
});