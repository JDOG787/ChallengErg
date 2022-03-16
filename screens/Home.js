import React from 'react';
import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function Home() {
    const auth = useContext(AuthContext)
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home</Text>
            <Button
            title='Logout'
            onPress={() => auth.logout()}
            />
        </View>
    );
}