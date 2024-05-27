// import EncryptedStorage from "react-native-encrypted-storage"
// import { RNEncryptedStorage } from "react-native-encrypted-storage/src/__mocks__/react-native";

import * as SecureStore from 'expo-secure-store';

const userKey = 'user_data';
const tokenKey = 'token';

export const storeUserData = async (userData) => {
    try {
        await SecureStore.setItemAsync(
            userKey,
            JSON.stringify(userData)
        )
    } catch (error) {
        console.log('Failed to store data:', error)
    }
}

export const getUserData = async () => {
    try {
        const userData = await SecureStore.getItemAsync(userKey)
        return userData ? JSON.parse(userData): null
    } catch (error) {
        console.log('Failed to retrieve user data:', error)
        return null
    }
}

export const removeUserData = async () => {
    try {
        await SecureStore.deleteItemAsync(userKey)
    } catch (error) {
        console.log('Failed to remove user data:', error)
    }
}


export const storeAuthToken = async (token) => {
    try {
        await SecureStore.setItemAsync(
            tokenKey,
            JSON.stringify(token)
        )
    } catch (error) {
        console.log('Failed to store token:', error)
    }
}

export const getAuthToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(tokenKey)
        return token ? JSON.parse(token): null
    } catch (error) {
        console.log('Failed to retrieve token:', error)
        return null
    }
}

export const removeAuthToken = async () => {
    try {
        await SecureStore.deleteItemAsync(tokenKey)
    } catch (error) {
        console.log('Failed to remove token:', error)
    }
}