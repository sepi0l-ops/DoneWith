import React from 'react';
import { Text, StyleSheet } from 'react-native'
import { useFonts, Calligraffitti_400Regular } from '@expo-google-fonts/dev'


function AppText({children, style, ...otherProps}) {
    const [fontsLoaded] = useFonts({ //Hooks can only be used inside the body of a functional component
        Calligraffitti_400Regular
      })
    if (!fontsLoaded){
        return <Text>Loading...</Text>;
    } else {
        return (
            <Text style={[styles.text, style]} {...otherProps}>
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: 'Calligraffitti_400Regular',
        fontWeight: '500',
        color: 'black',
        textAlign: 'center',
        lineHeight: 30
    }
})

export default AppText;