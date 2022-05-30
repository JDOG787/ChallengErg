import { Text, StyleSheet, View } from "react-native";
import HeaderSmall from '../components/HeaderSmall';
import MaskedView from "@react-native-community/masked-view";
import LinearGradient from "react-native-linear-gradient";

export default function Title({ text }) {
    return (
        <View style={styles.container}>
            <HeaderSmall>Hi there, </HeaderSmall>
            <MaskedView maskElement={<HeaderSmall>John Doe</HeaderSmall>}>
                <LinearGradient
                    // Button Linear Gradient
                    useAngle={true}
                    angleCenter={{ x: 0.5, y: 0.5 }}
                    // start={{x: 0, y: 0}}
                    // end={{x: 1, y: 0.8}}
                    angle={90}
                    colors={['#3478F6', '#6EC0F9']}
                >
                    {/* <Text style={[styles.link, { opacity: 0 }]}>hiiiiiiii</Text> */}
                    <HeaderSmall style={{opacity: 0}}>John Doe</HeaderSmall>

                </LinearGradient>
            </MaskedView>
            <HeaderSmall>!</HeaderSmall>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        // display: "flex",
        flexDirection: "row"
    },
    title: {
        color: "white",
        fontSize: 30,
        fontFamily: "800",
        marginBottom: 10,
        marginTop: 10
    },
    name: {

    }
});