import { View, Image, Text, StyleSheet } from 'react-native';
import Header from "../components/Header";
import logo from '../assets/logo.png';
import PrimaryButton from '../components/PrimaryButton';
import Link from '../components/Link';
import { foregroundPrimaryDefault } from '../lib/colors';
import AuthPage from '../components/AuthPage';
import Hero from '../components/Hero';

export default Welcome = ({ navigation }) => {
    return (
        <AuthPage>
            <Hero/>
            <View style={{ display: "flex", justifyContent: "center"}}>
                <PrimaryButton text="Sign Up" onPress={() => navigation.navigate("Signup")}/>
                <Text style={styles.text}>Already have an account? </Text>
                <Link text="Login"/>
            </View>
        </AuthPage>
    );
}

const styles = StyleSheet.create({
    text: {
        color: foregroundPrimaryDefault,
        fontSize: 18,
        marginTop: 10,
        textAlign: "center"
    }
});