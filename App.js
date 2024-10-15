import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './pages/Login';
import Register from './pages/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const screenConfig = {
  headerShown: false
}

const checkLoginHashCode = async () => {
  try {
    return await AsyncStorage.getItem("loginHashCode")
  } catch (error) {
    return null
  }
}

export default function App() {
  // handle if had login data
  let initialRouteName = "Register"
  let loginHashCode = checkLoginHashCode()
  console.log(loginHashCode);
  
  if (!loginHashCode) initialRouteName = "Login"
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name='Login' component={Login} options={screenConfig} />
        <Stack.Screen name='Register' component={Register} options={screenConfig} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
