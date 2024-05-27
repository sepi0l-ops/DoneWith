import React, { useRef } from 'react';
import Constants from 'expo-constants';

import LottieView from 'lottie-react-native'
import { View } from 'react-native';

function ActivityIndicator({ visible = false }) {
    const animation = useRef(null)
    if (!visible) 
        return null
    
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <LottieView 
            autoPlay
            loop
            ref={animation}
            style={{
                width: 400,
                height: 400,
    
            }}
            source={require('../assets/animations/loader1.json')}/>
        </View>
    );
}


export default ActivityIndicator