import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import styles from '../styles/global';
import Summary from '../components/Summary';
import TopBar from '../components/TopBar';
import PageContainer from '../components/PageContainer';
import { LinearGradient, MaskedView } from 'react-native-linear-gradient';
import Title from '../components/Title';
import Modal from "react-native-modal";
import { backgroundSecondaryDefault } from '../lib/colors';
import { getLogs } from '../lib/functions';


export default function Home() {
    const [log, setLog] = useState('');
    const [showModal, setShowModal] = useState(false);
    const auth = useContext(AuthContext);
    const [logs, setLogs] = useState();

    const get = async () => {
        const l = await getLogs(auth.authData)
        setLogs(l)
    }

    const addLog = () => {
        const res = axios('http://192.168.132.15:8080/logs/add', {
            method: 'POST',
            data: {
                distance: log
            },
            headers: {
                Authorization: `${auth.authData}`
            }
        })
        .catch(err => console.log(err));
    }
    console.log(log)
    return (
        // <View style={styles.page}>
        <PageContainer>

            <Title/>
            <Summary/>
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
            <Button
            title='Get logs'
            onPress={() => get()}
            />
            {
                logs ? logs.map((log) => {
                    return <Text style={{color: "#fff"}}>{`${new Date(log.date).getMonth()}/${new Date(log.date).getDate()}/${new Date(log.date).getFullYear()} - ${log.distance}`}</Text>
                }) : <Text style={{color: "#fff"}}>hi</Text>
            }
      
        </PageContainer>
        // </View>
    );
}