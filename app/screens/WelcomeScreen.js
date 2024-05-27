import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <ButtonComponent title='Login' color='primary' onPress={() => navigation.navigate(routes.LOGIN)}/>
                <ButtonComponent title='Register' color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center' //align items along secondary axis
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
})
export default WelcomeScreen;