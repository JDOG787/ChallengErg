import { StyleSheet, Text, View } from 'react-native';

export default Header = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {

    },
    header: {
        fontSize: 48,
        fontWeight: "700",
        color: "white",
        textAlign: "center",
        marginTop: 10
    }
});