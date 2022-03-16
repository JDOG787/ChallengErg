import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './/Tabs';
import AuthStack from './AuthStack';
import AuthContext from '../contexts/AuthContext';




export default function Navigator() {
    const auth = useContext(AuthContext);
    console.log(auth);
    return (
        <NavigationContainer>
                { auth.authData ? <Tabs /> : <AuthStack /> }
        </NavigationContainer>
    );
}