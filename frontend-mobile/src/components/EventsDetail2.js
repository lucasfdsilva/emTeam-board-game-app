import React,  { useState, useEffect, Component} from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,AsyncStorage } from 'react-native';
const temp = ""

const EventsDetail2 = ({ resultsEvents2 }) => {
    const [temp, setTemp] = useState('');
 
    const Joined = async () => {
        try {
            const tempId = await AsyncStorage.getItem('id')
           // console.log(tempId)
            setTemp(tempId)
        } catch{ console.log('catch') }
    }  
    useEffect(() => {
        Joined('');
    }, []);
    
    try{
        if (resultsEvents2.hostId ===temp){
            return null; }
        
    }catch{console.log('catch')}

        // resultsEvents.forEach(element=>{
        //     console.log(element.eventName)

        //     });

        return (<View style={styles.container}>
            <Text style={styles.name}>{resultsEvents2.eventName}</Text>
            <Text style={styles.text}>Location: {resultsEvents2.location}</Text>
            <Text style={styles.text}>Date:{resultsEvents2.eventDate}</Text>
            <Text style={styles.text}>Duration:{resultsEvents2.duration}</Text>
            <Text style={styles.text}>Spaces: {resultsEvents2.numOfPlayers}</Text>


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
            margin: 5,
        },
    });

    export default EventsDetail2;