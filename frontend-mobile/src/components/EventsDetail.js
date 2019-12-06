import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

 
const EventsDetail = ({ resultsEvents}) => {
  
    return (<View style={styles.container}>
        <Text style={styles.name}>{resultsEvents.eventName}</Text>
        <Text>{resultEvents.location}</Text>
        <Text>{resultEvents.eventDate}</Text>
        <TouchableOpacity style={styles.but}onPress={() => null}>
            <Text>Join Event</Text>
        </TouchableOpacity>
    </View>);
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        backgroundColor:'#add8e6',  //Light blue

    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        marginBottom: 5

    },
    name: {
        fontWeight: 'bold',
        fontSize: 15 //native size is 14
    },
    but: {
        backgroundColor: '#add8e6',  //Light blue
        alignSelf: "center",
        padding: 10,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 20,
        margin:5,
    },
});

export default EventsDetail;