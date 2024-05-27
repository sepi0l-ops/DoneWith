import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
    useEffect(() => {
        requestPermission()
    }, []) // this hooks ask for user's permission. The empty array [] makes sure users are only asked for permissions once

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
          alert('You need to enable permission to access the library')
    }

    const handlePress = () => {
        if (!imageUri) 
            selectImage()
        else
            Alert.alert('Delete', 'Are you sure you want to delete this image?',
                [
                   { text: 'Yes', onPress: () => onChangeImage(null)},
                   { text: 'No' }
                ] 
            )
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
            //base64: true
          });
          if(!result.canceled)
            onChangeImage(result.assets[0].uri) //select image to display
        } catch (error) {
          console.log('Error reading image: ', error)
        }
      }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            {!imageUri && <MaterialCommunityIcons name='camera' size={40} style={styles.icon}/>}
            {imageUri&& <Image 
                source={{ uri: imageUri}}
                style={styles.image}
            />}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.grey,
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    icon: {
        color: colors.medium
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ImageInput;