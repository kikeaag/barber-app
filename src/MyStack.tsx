import * as React from 'react';
import HomeScreen from './screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChoseBarberScreen from './screens/ChoseBarber/ChoseBarberScreen';
import ProfileBarberScreen from './screens/ProfileBarber/ProfileBarberScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChoseBarber" component={ChoseBarberScreen} />
      <Stack.Screen name="ProfileBarber" component={ProfileBarberScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
