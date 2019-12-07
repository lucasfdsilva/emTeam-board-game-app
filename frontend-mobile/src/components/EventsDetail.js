import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

 
const EventsDetail = ({ resultsEvents}) => {

    // resultsEvents.forEach(element=>{
        //     console.log(element.eventName)
            
       //     });
  
    return (<View style={styles.container}>
        <Text style={styles.name}>{resultsEvents.eventName}</Text>
        <Text style={styles.text}>Location: {resultsEvents.location}</Text>
        <Text style={styles.text}>Date:{resultsEvents.eventDate}</Text>
        <Text style={styles.text}>Duration:{resultsEvents.duration}</Text>
        <Text style={styles.text}>Spaces: {resultsEvents.numOfPlayers}</Text>


    </View>);
};


const styles = StyleSheet.create({
    container: {
        margin: 15,
        backgroundColor: '#dedcdc',  //Light blue
        fontSize: 25,
        padding: 15,
        borderRadius: 4,
        marginBottom: 30,

    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        marginBottom: 5

    },
    name: {
        fontWeight: 'bold',
        fontSize: 25,
        
    },
    but: {
        backgroundColor: '#dedcdc',  //Light blue
        alignSelf: "center",
        padding: 10,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 20,
        margin:5,
    },
});

export default EventsDetail;