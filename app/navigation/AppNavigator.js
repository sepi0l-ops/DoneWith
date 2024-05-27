import React, { useEffect } from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';
import expoPushTokenApi from '../api/expoPushToken'

const Tab = createBottomTabNavigator();

// Notifications.setNotificationHandler({
//     handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: false
//     })
// })

const AppNavigator = () => {
//     useEffect(() => {
//         registerForPushNotifications()
//     }, [])


// const registerForPushNotifications = async () => {
//     try {
//         const permission = await Notifications.getPermissionsAsync()
//         if (!permission.granted) return

//         const token = (await Notifications.getExpoPushTokenAsync({
//             projectId: Constants.easConfig.projectId
//         })).data
//         // console.log(token)
//         //expoPushTokenApi.register(token)
//     } catch (error) {
//         console.log('Error getting a push token: ', error)
//     }
// }

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Feed" 
                component={FeedNavigator} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='home' color={color} size={size}/>
                    }}/>
            <Tab.Screen 
                name="ListingsEdit" 
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)}/>,
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='plus-circle' color={color} size={size}/>
                })}
            />
            <Tab.Screen 
                name="My Account" 
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='account' color={color} size={size}/>
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator