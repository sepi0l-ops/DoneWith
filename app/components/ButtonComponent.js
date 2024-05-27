import React from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export default function ButtonComponent({title, onPress, color = 'primary', showActivity}) {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: colors[color]}]} onPress={onPress}>
       {showActivity ? <ActivityIndicator  />:null}
        <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderRadius: 25,
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:'center',
         alignItems:'center'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})
