import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import{ ModalProvider } from '../contexts/ModalContext';

export default PageContainer = ({ children, authPage, onLayout }) => {

    return (
        <ScrollView style={styles.page} >
            <SafeAreaView style={styles.container}>
                <ModalProvider>
                    <TopBar/>
                </ModalProvider>
                {children}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,                            
        backgroundColor: "#121212",
        padding: 26,
    },
    container: {
        flex: 1,
        // justifyContent: "center",

        // alignItems: "center",
        marginBottom: 60

    }
});
