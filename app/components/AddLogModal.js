import { View, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import Modal from "react-native-modal";
import { backgroundSecondaryDefault } from "../lib/colors";
import ModalContext from '../contexts/ModalContext';
import HeaderSmall from './HeaderSmall';
import Input from './Input.js';
import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import { addLog } from "../lib/functions";
import AuthContext from "../contexts/AuthContext";
import Dropdown from "./Dropdown";


export default AddLogModal = (props) => {
    const modal = useContext(ModalContext);
    const auth = useContext(AuthContext);
    const [log, setLog] = useState("");
    const [event, setEvent] = useState()

    return (
        <Modal onBackdropPress={() => modal.setShowModal(false)} isVisible={modal.showModal} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <View style={styles.modal}>
                {/* <Text style={{color: "#fff"}}>I am the modal content!</Text> */}
                <HeaderSmall>Add log</HeaderSmall>
                <Text style={styles.text}>Enter the number the meters rowed</Text>
                <Input keyboardType="decimal-pad" value={log} placeholder="1000" onChangeText={setLog}/>
                <Dropdown defaultOption={"Select Event"} options={["Grand Canyon", "English Channel", "The Great Lakes"]} onChange={setEvent}/>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", flexGrow: 1 }}>
                    <TertiaryButton onPress={() => modal.setShowModal(false)} text="Cancel"/>
                    <PrimaryButton onPress={() => addLog(auth.authData, log)} text="Add log"/>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: { 
        display: "flex", 
        // justifyContent: "center", 
        // alignItems: "center", 
        width: "100%", 
        padding: 18, 
        backgroundColor: backgroundSecondaryDefault,
        borderRadius: 16,
    },
    text: {
        color: "#fff",
        fontSize: 16,
    }
});