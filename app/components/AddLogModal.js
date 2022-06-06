import { View, Text, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import Modal from "react-native-modal";
import { backgroundSecondaryDefault } from "../lib/colors";
import ModalContext from '../contexts/ModalContext';
import HeaderSmall from './HeaderSmall';
import Input from './Input.js';
import PrimaryButton from "./PrimaryButton";
import TertiaryButton from "./TertiaryButton";
import { addLog, getEvents } from "../lib/functions";
import AuthContext from "../contexts/AuthContext";
import Dropdown from "./Dropdown";
import Spinner from "react-native-spinkit";
import Loader from "./Loader";


export default AddLogModal = (props) => {
    const modal = useContext(ModalContext);
    const auth = useContext(AuthContext);
    const [log, setLog] = useState("");
    const [event, setEvent] = useState();
    const [events, setEvents] = useState();

    useEffect(() => {
        getEvents(auth.authData)
            .then(res => {
                setEvents(res)
                console.log(res)
            }) 
    }, []);

    const onSubmit = () => {
  

        // console.log(log, event)
        const eventData = events.find(e => e.name === event);
        console.log(eventData._id);
        addLog(auth.authData, eventData._id, log);
        modal.setShowModal(false);
    }

    console.log(event)

    if (!events) { 
        return (
            <Modal onBackdropPress={() => modal.setShowModal(false)} isVisible={modal.showModal} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <View style={styles.modal}>
                <Loader/>
            </View>
        </Modal>
        )
    }

     if (events) {
        return (
            <Modal onBackdropPress={() => modal.setShowModal(false)} isVisible={modal.showModal} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <View style={styles.modal}>
                    {/* <Text style={{color: "#fff"}}>I am the modal content!</Text> */}
                    <HeaderSmall>Add log</HeaderSmall>
                    <Text style={styles.text}>Enter the number the meters rowed</Text>
                    <Input keyboardType="decimal-pad" value={log} placeholder="1000" onChangeText={setLog}/>
                    <Dropdown defaultOption={"Select Event"} options={events.map(e => e.name)} value={event} onChange={setEvent}/>
                    <View style={{ height: 70, display: "flex", flexDirection: "row" }}>
                        <View style={{flex: 1, marginRight: 8}}><TertiaryButton onPress={() => modal.setShowModal(false)} text="Cancel"/></View>
                        <View style={{flex: 1, marginLeft: 8}}><PrimaryButton onPress={onSubmit} text="Add log"/></View>
                    </View>
                </View>
            </Modal>
        );
        }
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