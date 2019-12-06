import React, { useState, useEffect, Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {Feather} from  '@expo/vector-icons';
import EventsList from '../components/EventsList';
import api from '../api/api'

const MyGamesScreen = ({ navigation,screenProps}) => {
    const [resultsEvents, setResultsEvents] = useState([]);
    const [errorMessageEvents, setErrorMessageEvents] = useState('');
    const hostID = '5ddda95251d90300133a6cf6';

    const eventsJoined = async () => {
        try {
            const response = await api.get('/events',  {});
            console.log(response.data.message);
            console.log('------------------------------------------------------------------')
            setResultsEvents(response.data.message);
            console.log(resultsEvents);
            console.log(response.data.message.eventName);
        } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
        }
    }
    useEffect(() => {
        eventsJoined();
    }, []);

    //const filterHostEvents = (hostID) => resultsEvents.filter(resultsEvent => resultsEvent.hostId.some(host => host.hostId == hostID));
    //const filterJoinedEvents = (hostID) => resultsEvents.filter(resultsEvent => resultsEvent.participants.some(par => par.participants == hostID));
return (<View style={{ flex: 1 }}>

<TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
        </TouchableOpacity>
        {errorMessageEvents ? <Text>{errorMessageEvents}</Text> : null}
<ScrollView>

<EventsList title="Hosted Events" //#repeat stuff, reapeat stuff repat stuff. resultsEvents={filterHostEvents(hostID)}resultsEvents={filterJoinedEvents(hostID)}
    navigation={navigation}
/>
<EventsList title="Joined Events" 
    navigation={navigation}
/>

</ScrollView>

</View>
   );
};


const styles = StyleSheet.create({});

export default MyGamesScreen; 