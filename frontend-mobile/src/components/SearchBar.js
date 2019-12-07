import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Feather} from  '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
// https://github.com/expo/vector-icons     List of icosn we can display

const SearchBar = ({ term, onSearch, onTermSearch,screenProps }) => {
    return (
        
        <View style={styles.background}>
            
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none" // was auto capping the first letter
                autoCorrect={false} //game names are werid 
                style={styles.searchStyle} placeholder="Search"
                value={term}
                onChangeText={onSearch} // onChangeText is a react command.  
                //onEndEditing={()=>console.log('submited')} //checking if input has been logged will be needed for API
                onEndEditing={onTermSearch}
            />

        </View> // adding text to search bar /fuctions
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 40,
        backgroundColor: '#dedcdc',  //gray
        height: 30,
        borderRadius: 5, //round coners 
        marginHorizontal: 10,
        flexDirection: 'row', // Making show text flows to right. 
    },
    searchStyle: {
        fontSize: 20,
        flex: 1, // user can click on whole seacrh bar
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'center',
        marginHorizontal: 15,

    }

});

export default SearchBar; 