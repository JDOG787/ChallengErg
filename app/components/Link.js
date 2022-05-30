import { Text, StyleSheet, TouchableOpacity } from "react-native";
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";

export default Link = (props) => {
    return (
        <MaskedView maskElement={<TouchableOpacity><Text style={styles.link} {...props}>{props.text}</Text></TouchableOpacity>}>
            <LinearGradient
                // Button Linear Gradient
                useAngle={true}
                angleCenter={{ x: 0.5, y: 0.5 }}
                // start={{x: 0, y: 0}}
                // end={{x: 1, y: 0.8}}
                angle={90}
                colors={['#3478F6', '#6EC0F9']}
            >
                <TouchableOpacity onPress={props.onPress}><Text style={[styles.link, { opacity: 0 }]}>{props.text}</Text></TouchableOpacity>
            </LinearGradient>
      </MaskedView>
    );
}

const styles = StyleSheet.create({
    link: {
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10,
        textDecorationLine: "underline",
    }
});