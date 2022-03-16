import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import { View, Text } from 'react-native';
import EventScreen from '../screens/Event';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#15171B',
          borderTopColor: '#282A2E',
          borderTopWidth: 2,
          // height: 55,
        },
      }}
    >
    <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    <Text style={{color: "white"}}>Home</Text>
                </View>
            )
    }}
    />
    <Tab.Screen name="Event" component={EventScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    <Text style={{color: "white"}}>Event</Text>
                </View>
            )
    }}
    />
      
    </Tab.Navigator>
  );
}