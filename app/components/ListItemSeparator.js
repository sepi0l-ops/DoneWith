import React from 'react';
import { View, StyleSheet } from "react-native";
import colors from '../config/colors'

function ListItemSeparator() {
    return (
        <View style={styles.separator} />
    );
}

const styles = StyleSheet.create({
    separator: {
        width: 'auto',
        height: 1,
        backgroundColor: colors.grey,
    }
})

export default ListItemSeparator;