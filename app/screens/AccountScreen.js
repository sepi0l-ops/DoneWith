import React, { useContext, useState } from 'react';
import { StyleSheet, View, FlatList, Modal, TouchableOpacity } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import AuthContext from '../auth/context';
import { removeUserData } from '../utility/storage';
import AppText from '../components/AppText';


const menuItems = [
    { 
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
        targetScreen: 'Messages'
    },
    { 
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: 'Messages'
    }
]

function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext) 
    const [showModal, setShowModal] = useState(false)
    
    const handleLogout = (confirm) => {
        removeUserData()
        setUser(null)
    }
    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Screen style={styles.screen}>
                <View style={styles.container}>
                    <ListItem 
                        title={user.name}
                        subTitle={user.email}
                        image={require('../assets/mosh.jpg')}
                    />
                </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    }
                />
            </View>
            <ListItem 
                title='Log Out'
                IconComponent={
                    <Icon name='logout' backgroundColor='#ffe66d'/>
                }
                onPress={() => {
                    openModal()
                }}
            />
                <Modal visible={showModal} transparent={true}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10}}>
                            <AppText style={{ fontSize: 18, marginBottom: 20 }}>Are you sure you want to log out?</AppText>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: 'green', padding: 15, borderRadius: 6, flex: 0.3 }}>
                                    <AppText style={{ color: 'white' }}>Yes</AppText>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={closeModal} style={{ backgroundColor: 'red', padding: 15, borderRadius: 6, flex: 0.3 }}>
                                    <AppText style={{ color: 'white' }}>No</AppText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.grey
    }
})

export default AccountScreen;