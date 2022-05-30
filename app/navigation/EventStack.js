import { createStackNavigator } from '@react-navigation/stack';
import RaceScreen from '../screens/Race';
import EventsScreen from '../screens/Events';

const Stack = createStackNavigator();

export default function Tabs() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Events" component={EventsScreen}/>
      <Stack.Screen name="Race" component={RaceScreen}/>
    </Stack.Navigator>
  );
}