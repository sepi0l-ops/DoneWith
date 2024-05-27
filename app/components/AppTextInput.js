import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles'

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
            <TextInput 
            style={defaultStyles.text} 
            placeholderTextColor={defaultStyles.colors.medium}
            {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.grey,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },

})

export default AppTextInput;