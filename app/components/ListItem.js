import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title='', subTitle='', image='', IconComponent='', onPress=()=>{}, renderRightActions=()=>{}}) {
    return (
            // <GestureHandlerRootView >
                <Swipeable renderRightActions={renderRightActions}>
                    <TouchableHighlight 
                    underlayColor={colors.grey}
                    onPress={onPress}>
                        <View style={styles.container}>
                            {IconComponent}
                            {image && <Image source={image} style={styles.image} />}
                            <View style={styles.detailsContainer}>
                                <AppText numberOfLines={1}>{title}</AppText>
                                {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                            </View>
                            <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25}/>
                        </View>
                    </TouchableHighlight>
                </Swipeable>
           //  </GestureHandlerRootView> 
        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
       width: 70,
       height: 70,
       borderRadius: 35,
       marginRight: 10
    },
    subTitle: {
        color: colors.medium,
        fontSize: 17
    }
})

export default ListItem;