import React, { useContext, useEffect, useState } from 'react';
import { Image, StyleSheet } from "react-native";
import * as Yup from 'yup';

import authApi from '../api/auth'
import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton} from '../components/forms'
import colors from '../config/colors';
import AuthContext, { useAuth } from '../auth/context';
import { getAuthToken, getUserData, storeAuthToken, storeUserData } from '../utility/storage';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    const [loginFailed, setLoginFailed] = useState(false)
    const[activity, setActivity] = useState(false)
    const { setUser } = useContext(AuthContext)

    const handleSubmit = async ({ email, password }) => {
        setActivity(true)
        const response = await authApi.login(email, password)

        setActivity(false)
        if (!response.ok) {
            return setLoginFailed(true)
        } else {
            setLoginFailed(false)
            try {
                await storeUserData(response.data.user || null)
                //update context here 
                //console.log(response.data.access_token)
                setUser(response.data.user || null)
                await storeAuthToken( response?.data?.access_token || null)

            } catch (error) {
                console.log(error)
            }
            
        }
    }

    return (
        <Screen style={styles.container}>
           <Image 
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            />

            <AppForm //using Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            > 
            <ErrorMessage error='Invalid email and/or password' visible={loginFailed}/>
                <AppFormField //using touched state
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder='Email'
                />
                <AppFormField 
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                />
                <SubmitButton title='Login' style={styles.login} showActivity={activity}/>
            </AppForm>

        </Screen>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    login: {
        color: colors.primary
    }
})