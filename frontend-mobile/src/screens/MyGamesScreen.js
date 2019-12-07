import React, { useState, useEffect, Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, AsyncStorage} from 'react-native';
import {Feather} from  '@expo/vector-icons';
import EventsList from '../components/EventsList';
import api from '../api/api'
import EventsDetail from '../components/EventsDetail'
import EventsDetail2 from '../components/EventsDetail2'
import Logo from '../components/Logo';
import axios from 'axios';

const MyGamesScreen = ({ navigation,screenProps}) => {
    const [resultsEvents, setResultsEvents] = useState([]);
    const [resultsEvents2, setResultsEvents2] = useState([]);
    const [errorMessageEvents, setErrorMessageEvents] = useState('');





    const eventsJoined = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
            const response = await api.get('/events/host/'+tempId);
           response.data.message.forEach(element => {
                resultsEvents.push(element)
            });
            //console.log('------------------------------------------------------------------')
            setResultsEvents(response.data.message);
            //console.log(resultsEvents);
      } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
      }
  }
    useEffect(() => {
        eventsJoined();
    }, []);

    const eventsJoined2 = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
            const response1 = await api.get('/events/participants/'+tempId);
           response1.data.message.forEach(element => {
                resultsEvents2.push(element)
            });
            //console.log('------------------------------------------------------------------')
            setResultsEvents2(response1.data.message);
            //console.log(resultsEvents);
      } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
      }
  }
    useEffect(() => {
        eventsJoined2();
    }, []);






   // const filterHostEvents = (hostID) => resultsEvents.filter(resultsEvent => resultsEvent.hostId.some(host => host.hostId == hostID));
   // const filterJoinedEvents = (hostID) => resultsEvents.filter(resultsEvent => resultsEvent.participants.forEach(element => {
     //   if(element==hostID){
     //       par.push(element)

     //   }}));
     //   console.log(par)
return (<View>
<Logo/>
<TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
        </TouchableOpacity>

<ScrollView>
<Text>{resultsEvents._id}</Text>
<EventsList title="Hosted Events" 
    navigation={navigation}
/>
<FlatList
            horizontal={true}
            data={resultsEvents}
            keyExtractor={(resultsEvents) => resultsEvents._id}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity onPress={() => navigation.navigate('EventH', { id: item._id, duration: item.duration, eventDate: item.eventDate, eventName: item.eventName, gameId: item.gameId,hostId: item.hostId, location: item.location, numOfPlayers: item.numOfPlayers, participants: item.participants})}>
                        <EventsDetail resultsEvents={item} />
                      
                    </TouchableOpacity>
                )
            }}
        />

<EventsList title="Joined Events"
    navigation={navigation}
/>

<FlatList
            horizontal={true}
            data={resultsEvents2}
            keyExtractor={(resultsEvents2) => resultsEvents2._id}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity onPress={() => navigation.navigate('EventJ', { id: item._id, duration: item.duration, eventDate: item.eventDate, eventName: item.eventName, gameId: item.gameId,hostId: item.hostId, location: item.location, numOfPlayers: item.numOfPlayers, participants: item.participants})}>
                        <EventsDetail2 resultsEvents2={item} />
                      
                    </TouchableOpacity>
                )
            }}
        />


</ScrollView>
<TouchableOpacity style={styles.but} onPress={eventsJoined,eventsJoined2}>
                    <Text>Get latest Events</Text>

                </TouchableOpacity>
</View>
   );
};


const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 35,
        

    },
    but: {
        backgroundColor: '#dedcdc',  //Light blue
        alignSelf: "center",
        padding: 15,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 100,
        margin:15,
    },
    
});

export default MyGamesScreen; 