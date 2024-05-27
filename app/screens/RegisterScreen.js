import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'

import authApi from '../api/auth'
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import colors from '../config/colors';
import { storeAuthToken, storeUserData } from '../utility/storage';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    const [activity, setActivity] = useState(false)
    const { setUser } = useContext(AuthContext)

    const handleSubmit = async (values) => {
        const { name, email, password} = values
        setActivity(true)
        const userData = { name, email, password }
        //console.log('userData', userData)
        const response = await authApi.register(userData)
        setActivity(false)
        //console.log(response)
        if (!response.success) {
            return alert('Something went wrong. Please try again')
        } else {
            try {
                await storeUserData(response.data || null)
                //console.log(response.token)
                setUser(response.data || null)
                await storeAuthToken(response.token || null)

            } catch (error) {
                console.log(error)
            }
        }
    }
    return (
        <Screen>
            <Image 
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            />
            <AppForm
                initialValues={{ name: '', email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='Name'
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    icon='email'
                    name='email'
                    placeholder='Email'
                />
                <AppFormField
                    autoCapitalize='false'
                    autoCorrect={false}
                    secureTextEntry
                    icon='lock'
                    name='password'
                    placeholder='Password'
                />
                <SubmitButton title='Register' showActivity={activity}/>
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 20,
        alignSelf: 'center'
    }
})

export default RegisterScreen;