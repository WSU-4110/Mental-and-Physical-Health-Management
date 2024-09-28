<<<<<<< HEAD
/**

Sample React Native App
https://github.com/facebook/react-native
@Format
*/
import React from 'react';
import LoginScreen from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
return (
  <NavigationContainer>

<Stack.Navigator initialRouteName = "Login">
<Stack.Screen name = "Login" component = {LoginScreen}/>
</Stack.Navigator>
</NavigationContainer>

);
}
=======
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import './gesture-handler';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> origin/merwinaamir10
