import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Home() {
    const [log, setLog] = useState('');
    const auth = useContext(AuthContext);

    const addLog = () => {
        const res = axios.post('/api/user/logs/add', {
            data: {
                distance: Math.floor(Math.random() * 100)
            }
        });
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home</Text>
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
            <Text>{auth.authData}</Text>
            <TextInput value={log} onChange={setLog} placeholder='new log' keyboardType='number-pad'/>
            <Button
            title='Add Log'
            onPress={() => auth.logout()}
            />
        </View>
    );
}