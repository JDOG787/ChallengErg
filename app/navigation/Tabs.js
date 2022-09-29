import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import NotificationsScreen from '../screens/Notifications';
import ProfileScreen from '../screens/Profile';
import { View, Text } from 'react-native';
import EventScreen from '../screens/Events';
import EventStack from './EventStack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { backgroundPrimaryDefault, backgroundSecondaryDefault, foregroundPrimaryDefault, foregroundSecondaryDefault } from '../lib/colors';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: backgroundPrimaryDefault,
          borderTopColor: backgroundSecondaryDefault,
          borderTopWidth: 2,
          // height: 55,
        },
      }}
    >
    <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    {/* <Text style={{color: "white"}}>Home</Text> */}
                    <Ionicons name="home" size={24} color={focused ? foregroundPrimaryDefault : foregroundSecondaryDefault} />
                </View>
            )
    }}
    />
    <Tab.Screen name="Event" component={EventStack} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    {/* <Text style={{color: "white"}}>Event</Text> */}
                    <Ionicons name="map" size={24} color={focused ? foregroundPrimaryDefault : foregroundSecondaryDefault} />
                </View>
            )
        }}
    />
        <Tab.Screen name="Notifications" component={NotificationsScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    {/* <Text style={{color: "white"}}>Event</Text> */}
                    <Ionicons name="notifications" size={24} color={focused ? foregroundPrimaryDefault : foregroundSecondaryDefault} />
                </View>
            )
        }}
    />
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
            tabBarIcon: ({ focused }) => (
                <View>
                    {/* <Text style={{color: "white"}}>Event</Text> */}
                    <Ionicons name="person-circle" size={24} color={focused ? foregroundPrimaryDefault : foregroundSecondaryDefault} />
                </View>
            )
        }}
    />
      
    </Tab.Navigator>
  );
}