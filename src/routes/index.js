import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login'
import Home from '../screens/Home'
import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/slices/authSlice';
import Loader from '../components/Loader';
const Stack = createNativeStackNavigator();

export default function Routes() {
  const isLogin = useSelector(selectIsLogin)
  return (
    <NavigationContainer>
      <Loader />
      {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ header: () => false }}>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ header: () => false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}