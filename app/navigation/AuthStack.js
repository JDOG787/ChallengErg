import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/Signup';
import LoginScreen from '../screens/Login';
import WelcomeScreen from '../screens/Start';

const Stack = createStackNavigator();

export default function Tabs() {
  return (
    <Stack.Navigator animationsEnabled={false} screenOptions={{
        headerShown: false,
        animationEnabled: false
    }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Signup" component={SignupScreen}/>
      <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  );
}