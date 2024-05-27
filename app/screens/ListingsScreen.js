import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import CardComponent from '../components/CardComponent';
import colors from '../config/colors';
import listingsApi from '../api/listings'
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import ButtonComponent from '../components/ButtonComponent';
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi';
import listings from '../api/listings';


function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([])
    const getListingsApi = useApi(listingsApi.getListings)


    useEffect(() => {
        getListingsApi.request()
    }, [])

    const handleRetry = () => {
        getListingsApi.setLoading(true)
        getListingsApi.setError(false)
        getListingsApi.request()
    }

    const onPressWrapper = () => {
        getListingsApi.request()
        handleRetry()
    }

    useEffect(() => {
        if (getListingsApi.error === null) {
            getListingsApi.setError(false)
        }
    }, [getListingsApi.error])


    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <AppText>Couldn't retrieve the listings</AppText>
                <ButtonComponent title='Retry' onPress={onPressWrapper}/>
            </>}
            <ActivityIndicator visible={getListingsApi.loading}/>
            
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <CardComponent
                        title={item.title}
                        subTitle={'$' + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
                    />
                }
            /> 
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.grey
    }
})

export default ListingsScreen;