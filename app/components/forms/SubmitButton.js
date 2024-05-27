import React from 'react';
import { useFormikContext } from "formik";

import ButtonComponent from '../ButtonComponent';

function SubmitButton({ title, color, showActivity }) {
    const { handleSubmit } = useFormikContext();

    return (
        <ButtonComponent 
            title={title}
            onPress={handleSubmit}
            color={color}
            showActivity={showActivity}
        />
    );
}

export default SubmitButton;