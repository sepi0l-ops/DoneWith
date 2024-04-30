import React from 'react';
import { Image, StyleSheet, View } from 'react-native'

import colors from '../config/colors'

function ViewImageScreen(props) {
    return (
        <View style={styles.imageContainer}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
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
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 50,
        left: 30
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 50,
        right: 30
    }
})

export default ViewImageScreen;