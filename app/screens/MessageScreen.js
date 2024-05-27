import React, { useCallback, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')

    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')

    }
]

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);
    }

    const timeout = ()=> {
        setRefreshing(true);
        setTimeout(()=>{ setRefreshing(false)},2000);
    }

    return (
            <Screen>
                <FlatList
                    style={styles.screen}
                    data={messages}
                    keyExtractor={message => message.id.toString()}
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            subTitle={item.description}
                            image={item.image}
                            onPress={() => console.log('Message selected', item)}
                            renderRightActions={() => 
                            <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                        />}
                    ItemSeparatorComponent={ListItemSeparator}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing} 
                            onRefresh={timeout}
                        /> 
                        
                    }
                    // refreshing={refreshing}
                    // onRefresh={() => {
                    //     ])
                    // }}
                />
            </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessageScreen;