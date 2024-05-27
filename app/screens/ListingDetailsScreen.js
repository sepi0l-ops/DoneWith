import React, { useContext } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem'
import routes from '../navigation/routes'
import AuthContext from '../auth/context';

function ListingDetailsScreen({ route, navigation }) {
    const listing = route.params
    const { user } = useContext(AuthContext)

    return (
        <View>
            <Image 
                source={{ uri: listing.images[0].url}} 
                style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/mosh.jpg')}
                        title={user.name}
                        subTitle='5 Listings'
                        onPress={() => {
                            navigation.navigate(routes.ACCOUNT)
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: 'auto',
        height: 300
    },
    price: {
        color: colors.secondary,
        marginVertical: 10
    },
    title: {
        fontSize: 23,
    },
    userContainer: {
        marginVertical: 40,
        
    }
})

export default ListingDetailsScreen;