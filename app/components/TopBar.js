import { StyleSheet, View, Text, Image } from 'react-native';
import { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import logo from '../assets/logo.png';
import Bubble from './Bubble';
import {foregroundPrimaryDefault} from '../lib/colors';
import AddLogModal from './AddLogModal';
import ModalContext, { ModalProvider } from '../contexts/ModalContext';


export default TopBar = () => {
    const modal = useContext(ModalContext);
    const openModal = () => {
        console.log(modal)
        modal.setShowModal(true);
    }

    return (
            <View style={styles.topbar}>
                <Image source={logo} style={styles.logo} /> 
                <Bubble onPress={openModal}>
                    <Icon size={32} color={foregroundPrimaryDefault} name="add" style={{ paddingLeft: 2, }}/>
                </Bubble>
                <AddLogModal/>
            </View>
    );
}

const styles = StyleSheet.create({
    topbar: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 16
    },
    logo: {
        width: 45,
        height: 45,
        resizeMode: "contain",
    },

});