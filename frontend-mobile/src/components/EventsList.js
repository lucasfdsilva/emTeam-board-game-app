import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import EventsDetail from './EventsDetail';

const EventsList = ({ title, resultsEvents, navigation }) => { //setting the titals to pass down prop names from home screen
   // console.log('events ist')
  //console.log(resultsEvents)
    return (<View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <FlatList
            horizontal={true}
            data={resultsEvents}
            keyExtractor={(resultsEvents) => resultsEvents._id}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Event', { id: item._id, duration: item.duration, eventDate: item.eventDate, eventName: item.eventName, gameId: item.gameId,hostId: item.hostId, location: item.location, numOfPlayers: item.numOfPlayers, participants: item.participants})}>
                        <EventsDetail resultsEvents={item} />
                      
                    </TouchableOpacity>
                )
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    container: {
        marginBottom: 8,
        borderBottomColor: '#add8e6',  //Light blue
    }

});

export default EventsList;