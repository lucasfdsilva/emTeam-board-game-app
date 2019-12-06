import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,ScrollView,} from 'react-native';
import axios from 'axios';
import EventsList from '../components/EventsList';

    const FindScreen = ({navigation,}) => {
    const gameid = navigation.getParam('id');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('name');
    const [resultsEvents, setResultsEvents,] = useState([]);
    const findEvents = async () => {
        useEffect(() => {
            findEvents('gameid')
        }, []);
        try{
            const Url = 'http://apiboardgeek.co.uk/events/game/'+ gameid;
               const response = await axios({
                   method: 'get',
                   url: Url        
               });
               console.log(response.data.message)
               console.log('-------------------------------')
               setResultsEvents(response.data.message)
               console.log(resultsEvents)
           }catch{
               console.log("catch")
           }
           
               
           }

   
   
   return (<View>
        <Image style={styles.image} source={{ uri: pic }} />
        <View>
        <Text>You wan to find a game of {name}</Text>
        <Text>The Games ID is {gameid}</Text>
        </View>
        <ScrollView>

            <EventsList title="Events for this game" //#repeat stuff, reapeat stuff repat stuff. 
                navigation={navigation}
            />
            </ScrollView>
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