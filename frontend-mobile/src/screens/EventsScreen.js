import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,Alert,TextInput, AsyncStorage} from 'react-native';
import {Feather} from  '@expo/vector-icons';
import axios from 'axios';


    const EventsScreen = ({navigation,screenProps}) => {
    const _id = navigation.getParam('id');
    const dur = navigation.getParam('duration');
    const date = navigation.getParam('eventDate');
    const eName = navigation.getParam('eventName');
    const gameID = navigation.getParam('gameId');
    const hostID = navigation.getParam('hostId');
    const loca = navigation.getParam('location');
    const num = navigation.getParam('numOfPlayers');

    const participants = navigation.getParam('participants');


    const UpdateEvent = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
            const response = await api.put('/events/update',  {
                data: { eventName: eventName,
                    location:  location,
                    numOfPlayers:numOfPlayers,
                    eventDate: eventDate,
                    duration: duration,
                    gameId: gameId,
                    hostId: tempId }
            });
            if(response.data.message === "Event Updated Successfully!"){
                alert('Event updated')
                navigation.navigate('Home')
            }
        } catch (e) {
            console.log('wooops someting did not work correctly');
        }
    }


    const JoinEvent = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
           // console.log('trying join')
            const response = await axios({
                method: 'put',
                url: 'http://apiboardgeek.co.uk/join_event',

                data: {
                    eventId: _id,
                    userId: tempId,
                }
            });
                //console.log(response.data)
                alert('Event Joined')
                navigation.navigate('Find')
            
        } catch (e) {
            console.log('wooops someting did not work correctly');
        }
    }


 
    return (<View style={styles.page}>
        <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
            </TouchableOpacity>
        
        <View style={styles.text}>
        <Text>{eName}</Text>
        <Text>{loca}</Text>
        <Text>{date}</Text>
        <Text>{num}</Text>
        <Text>{participants}</Text>
        <Text>List of people with ratings box beside each name</Text>
        </View>
        <TouchableOpacity  style={styles.but}onPress={JoinEvent}>
            <Text>Join Event</Text>
        </TouchableOpacity>

        
   




        </View>
        
    );
};

const styles = StyleSheet.create({
   
    but: {
        backgroundColor: '#dedcdc',  //Light blue
        alignSelf: "center",
        padding: 10,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 30,
        margin:10,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 15,
        

    },
    page:{
        marginTop: 30,
        flexGrow: 1,
    },
}); 
export default EventsScreen;