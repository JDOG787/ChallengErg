import {StyleSheet, Text} from 'react-native';
import { foregroundPrimaryDefault } from '../lib/colors';

export default ParagraphAccent = ({ children }) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: "700",
        color: foregroundPrimaryDefault
    }
})