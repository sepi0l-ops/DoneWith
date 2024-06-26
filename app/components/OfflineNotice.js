import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants'
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from './AppText';
import colors from '../config/colors';

function OfflineNotice(props) {
    const netInfo = useNetInfo()

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }

    return null
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        elevation: (Platform.OS === 'android') ? 1 : 0,
        height: 50,
        justifyContent: 'center',
        top: Constants.statusBarHeight,
        width: '100%',
        position: 'absolute',
    },
    text: {
        color: colors.white
    }

})

export default OfflineNotice;