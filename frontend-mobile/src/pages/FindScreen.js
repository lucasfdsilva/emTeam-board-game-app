import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';


    const FindScreen = ({navigation,}) => {
    const id = navigation.getParam('id');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('name');
    const max = navigation.getParam('max');
    const min = navigation.getParam('min');
    return (<View>
        <Image style={styles.image} source={{ uri: pic }} />
        <View>
        <Text>You wan to find a game of {name}</Text>
        <Text>The Games ID is {id}</Text>
        <Text>recomended max players {max}</Text>
        <Text>recomended min players {min}</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200, 
        width: 200,
        alignItems: 'flex-end',
        marginLeft: 10,
        marginTop: 30,
    }
}); 
export default FindScreen;