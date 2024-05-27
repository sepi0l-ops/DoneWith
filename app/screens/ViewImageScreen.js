import React from 'react';
import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <MaterialCommunityIcons name='close' style={styles.closeIcon} color='white' size={30} />
            <MaterialCommunityIcons name='trash-can-outline' style={styles.deleteIcon} color='white' size={30} />
            <Image 
            source={require('../assets/chair.jpg')} 
            style={styles.image}
            resizeMode='contain'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: colors.black,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 50,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 50,
        right: 30
    }
})

export default ViewImageScreen;