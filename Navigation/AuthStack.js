import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/Signup';

const Stack = createStackNavigator();

export default function Tabs() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Signup" component={SignupScreen}/>
    </Stack.Navigator>
  );
}