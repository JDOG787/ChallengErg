import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { backgroundPrimaryDefault } from '../lib/colors';

export default AuthPage = ({ children }) => {
    return (
        <View style={styles.page}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        // display: "flex",
        // justifyContent: "space-evenly",
        // alignItems: "center",
        backgroundColor: backgroundPrimaryDefault,
        padding: 18,
        paddingVertical: 34,
    },
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        // alignItems: "center",
        // backgroundColor: "blue",
     
        // backgroundColor: backgroundPrimaryDefault
    }
});