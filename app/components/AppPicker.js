import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList, RefreshControl } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ 
    icon, 
    items, 
    numberOfColumns = 1, 
    onSelectItem, 
    placeholder, 
    PickerItemComponent = PickerItem,
    selectedItem, width ='100%' 
    }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
 
    const timeout = ()=> {
        setRefreshing(true);
        setTimeout(()=>{ setRefreshing(false)},2000);
    }

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                
                { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                <MaterialCommunityIcons name='chevron-down' size={20} color={defaultStyles.colors.medium} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Button title='Close' onPress={() => setModalVisible(false)}/>
                <FlatList 
                    refreshControl={ <RefreshControl onRefresh={timeout} refreshing={refreshing} /> }
                    data={items}
                    keyExtractor={ item => item.value.toString()}
                    numColumns={numberOfColumns}
                    // renderItem={({ item }) => 
                    //   return  <PickerItem label={item.label} onPress={() => console.log(item)}/>
                    // }
                    renderItem={({item})=>{
                        return <PickerItemComponent
                            item={item}
                            label={item.label} 
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}/>
                    }}
                />
        </Modal>
        </>
    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.grey,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1,
        marginRight: 200
    },
    text: {
        flex: 1,
        marginRight: 200
    }

})

export default AppPicker;