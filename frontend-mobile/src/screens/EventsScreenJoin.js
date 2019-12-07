import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,Alert,TextInput} from 'react-native';
import {Feather} from  '@expo/vector-icons';
import axios from 'axios';
import api from '../api/api'


    const EventsScreenHost = ({navigation,screenProps}) => {
    const _id = navigation.getParam('id');
    const dur = navigation.getParam('duration');
    const date = navigation.getParam('eventDate');
    const eName = navigation.getParam('eventName');
    const gameID = navigation.getParam('gameId');
    const hostID = navigation.getParam('hostId');
    const loca = navigation.getParam('location');
    const num = navigation.getParam('numOfPlayers');
    const participants = navigation.getParam('participants');
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [numOfPlayers, setNumOfPlayers] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [duration, setDuration] = useState(''); 


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
                    hostId: tempId  }
            });
            if(response.data.message === "Event Updated Successfully!"){
                alert('Event Left')
                navigation.navigate('Home')
            }
        } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
        }
    }


    const LeaveEvent = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
            const response = await axios({
                method: 'put',
                url: 'http://apiboardgeek.co.uk/leave_event',

                data: {
                    eventId: _id,
                    userId: tempId,
                }
            });
                console.log(response)
                alert('Event Left')
                navigation.navigate('Events')
            
        } catch (e) {
                        
('wooops someting did not work correctly');
        }
    }


    const rateEvent = async () => {

        alert('The feature will be available at a later date')
           }
    return (<View style={styles.page}>
        
        <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
            </TouchableOpacity>
            <View style={styles.container}>
        <View>
        <Text>{eName}</Text>
        <Text>{loca}</Text>
        <Text>{date}</Text>
        <Text>{num}</Text>
        <Text>{participants}</Text>
        <Text>Rate Players</Text>
        <Text>List of people with ratings box beside each name</Text>
       
        <TouchableOpacity  style={styles.but}onPress={() => rateEvent()}>
            <Text>submit ratings</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.but}onPress={() => LeaveEvent()}>
            <Text>Leave Event</Text>
        </TouchableOpacity>


   


        </View>

        </View>
        
        
        
    </View>
    );
};

const styles = StyleSheet.create({
   
    but: {
        backgroundColor: '#dedcdc',  //Light blue
        alignSelf: "center",
        padding: 15,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 100,
        margin:15,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 15,
        

    },
    page:{
        marginTop: 30,
    },
    inputBox: {
		width: 300,
		backgroundColor: '#dedcdc',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 10,
		paddingVertical: 12

    },
    container : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
    },
}); 
export default EventsScreenHost;