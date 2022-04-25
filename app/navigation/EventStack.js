import { createStackNavigator } from '@react-navigation/stack';
import RaceScreen from '../screens/Race';
import EventScreen from '../screens/Events';

const Stack = createStackNavigator();

export default function Tabs() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Events" component={EventScreen}/>
      <Stack.Screen name="Race" component={RaceScreen}/>
    </Stack.Navigator>
  );
}