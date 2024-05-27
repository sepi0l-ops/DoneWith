import React from 'react';
import { StyleSheet } from 'react-native'
import { useFormikContext } from "formik";
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps}) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

    return (
        <>
            <AppTextInput //add text input field 
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                style={styles.container}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default AppFormField;