import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import AppText from './AppText'
import colors from '../config/colors'

function CardComponent({ title, subTitle, imageUrl, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: 'auto',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    subTitle:{
        color: colors.secondary,
    },
    title: {
        marginBottom: 7
    }
})

export default CardComponent;