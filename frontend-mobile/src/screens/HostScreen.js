import React, { useState, useEffect, Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import {Feather} from  '@expo/vector-icons';

const HostScreen = ({ navigation }) => {
    const gameId = navigation.getParam('id');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('name');
    const max = navigation.getParam('max');
    const min = navigation.getParam('min');
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [numOfPlayers, setNumOfPlayers] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [duration, setDuration] = useState('');
    async function Event() { console.log("HElp") }
    async function AddEvent() {
        try {
            const tempId = await AsyncStorage.getItem('id')
            const response = await axios({
                method: 'post',
                url: 'http://apiboardgeek.co.uk/events/create',
                data: {
                    eventName: eventName,
                    location: location,
                    numOfPlayers: numOfPlayers,
                    eventDate: eventDate,
                    duration: duration,
                    gameId: gameId,
                    hostId: tempId,
                }
            });
            //console.log('HELLO')

            if (response.status == 201) {
                console.log(response.data)
                alert('Event Created')
                navigation.navigate('Home')
            } else {
                alert('Please enter vaild information')
            }

            // console.log("catch")




        } catch{
            //console.log("catch")
        }


    }




    return (<View >
        {/* <TouchableOpacity onPress={() => screenProps.openDraw()}>
            <Feather style={styles.iconStyle} name="menu"></Feather>
        </TouchableOpacity> */}
        <Image style={styles.image} source={{ uri: pic }} />
        <View style={styles.container}>
            <Text>You wan to host a game of {name}</Text>
            <Text>Game ID is {gameId}</Text>
            <Text>recomended max players {max}</Text>
            <Text>recomended min players {min}</Text>
            <View style={styles.container2}>
                <ScrollView>
                <TextInput style={styles.inputBox}
                    autoCapitalize="none" // was auto capping the first letter
                    autoCorrect={false} //game names are werid 
                    placeholder="Event name"
                    value={eventName}
                    onChangeText={setEventName}
                />
                <TextInput style={styles.inputBox}
                    autoCapitalize="none" // was auto capping the first letter
                    autoCorrect={false} //game names are werid 
                    placeholder="location"
                    value={location}
                    onChangeText={setLocation}
                />
                <TextInput style={styles.inputBox}
                    autoCapitalize="none" // was auto capping the first letter
                    autoCorrect={false} //game names are werid 
                    placeholder="How many total players"
                    value={numOfPlayers}
                    onChangeText={setNumOfPlayers}
                />
                <TextInput style={styles.inputBox}
                    autoCapitalize="none" // was auto capping the first letter
                    autoCorrect={false} //game names are werid 
                    placeholder="Date"
                    value={eventDate}
                    onChangeText={setEventDate}
                />
                <TextInput style={styles.inputBox}
                    autoCapitalize="none" // was auto capping the first letter
                    autoCorrect={false} //game names are werid 
                    placeholder="Duration"
                    value={duration}
                    onChangeText={setDuration}
                />

                
                <TouchableOpacity style={styles.but} onPress={AddEvent}>
                    <Text>Submit Event</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>

        </View>
    </View>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        marginLeft: 10,
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
    container2: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    but: {
        alignSelf: "center",
        padding: 15,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 100,
        margin: 10,
        backgroundColor: '#dedcdc',
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 35,
    }



});
export default HostScreen;