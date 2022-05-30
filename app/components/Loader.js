import { StyleSheet, View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { foregroundTertiaryDefault } from '../lib/colors';

export default Loading = ({ isVisible }) => {
    return (
        <View style={styles.spinner}>
            <Spinner size={45} isVisible={true} type='Arc' color={foregroundTertiaryDefault}/>
        </View>
    );
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        height: 50
    }
});