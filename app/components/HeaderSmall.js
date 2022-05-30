import { StyleSheet, View, Text } from 'react-native';
import { foregroundPrimaryDefault } from "../lib/colors";

export default function HeaderSmall({ children, style }) {
    return (
        <View>
            <Text style={[style, styles.text]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    
    },
    text: {
        fontSize: 32,
        color: foregroundPrimaryDefault,
        fontWeight: "700",
        marginBottom: 32
    }
});