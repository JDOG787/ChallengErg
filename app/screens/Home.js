import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import axios from 'axios';
import styles from '../styles/global';
import Summary from '../components/Summary';


export default function Home() {
    const [log, setLog] = useState('');
    const auth = useContext(AuthContext);

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
        <View style={styles.page}>
            {/* <Text>Home</Text>
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
            <Text>{auth.authData}</Text>
            <TextInput value={log} onChangeText={setLog} placeholder='new log' keyboardType='number-pad'/>
            <Button
            title='Add Log'
            onPress={() => addLog()}
            /> */}
            <Text style={styles.title}>Challengerg</Text>
            <Summary/>
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
        </View>
    );
}