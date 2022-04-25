import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default PageContainer = ({ children, authPage }) => {

    return (
        <ScrollView style={styles.page}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,                            
        backgroundColor: "#121212",
        padding: 18,
        paddingTop: 30
    },
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",

    }
});
