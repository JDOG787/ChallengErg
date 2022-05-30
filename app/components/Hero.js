import { View, Image } from 'react-native';
import Header from "./Header";
import logo from "../assets/logo.png";

export default Hero = () => {
    return (
        <View style={{ display: "flex", alignItems: "center"}}>
            <Image style={{width: 150, height: 150, resizeMode: "contain"}} source={logo}/>
            <Header text="ChallengErg"/>
        </View>
    );
}