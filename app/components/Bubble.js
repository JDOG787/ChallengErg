import  { TouchableOpacity, StyleSheet, View } from 'react-native'
import { backgroundSecondaryDefault } from '../lib/colors';

export default Bubble = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.bubble} onPress={onPress}>
                {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bubble: {
        height: 48,
        width: 48,
        borderRadius: 50,
        backgroundColor: backgroundSecondaryDefault,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
