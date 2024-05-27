import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { useAuth } from '../auth/context';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    //const { user, logout, loading } = useAuth()
    // if (loading) {
    //     return <div>Loading...</div>
    // }
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator