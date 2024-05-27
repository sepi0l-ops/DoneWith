import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup'

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import Screen from '../components/Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import listingsApi from '../api/listings'
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    //images: Yup.array().min(1, 'Please select at least one image')
})

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'table-furniture'},
    { label: 'Clothing', value: 2, backgroundColor: 'cyan', icon: 'tshirt-crew'},
    { label: 'Camera', value: 3, backgroundColor: 'violet', icon: 'camera'},
    { label: 'Games', value: 4, backgroundColor: 'lightgreen', icon: 'gamepad-variant'},
    { label: 'Cars', value: 5, backgroundColor: 'blue', icon: 'car-sports'},
    { label: 'Sports', value: 6, backgroundColor: 'dodgerblue', icon: 'baseball'},
    { label: 'Movies & Music', value: 7, backgroundColor: 'green', icon: 'headphones'},
    { label: 'Books', value: 8, backgroundColor: 'purple', icon: 'bookshelf'},
    { label: 'Other', value: 9, backgroundColor: 'grey', icon: 'movie-open'},
]

function ListingEditScreen(props) {
    const location = useLocation();

    const handleSubmit = async (listing) => {
        const result =  await listingsApi.addListing({ ...listing, location })
        if (!result.ok) {
            console.log(result.problem)
            return alert('Unable to save listing')
        } else {
            return alert('Success')
        }
            
    }   

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null, images: [] }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name='images'/>
                <AppFormField maxlength={255} name='title' placeholder='Title'/>
                <AppFormField 
                    keyboardType='numeric'
                    maxlength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker 
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem} //picker component with icons
                    placeholder='Category'
                />
                <AppFormField 
                    maxlength={255}
                    multiline
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})

export default ListingEditScreen;