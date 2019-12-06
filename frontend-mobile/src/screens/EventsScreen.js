import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,Alert,} from 'react-native';
import {Feather} from  '@expo/vector-icons';


    const EventsScreen = ({navigation,screenProps}) => {
    const _id = navigation.getParam('_id');
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
            const response = await api.put('/events/update',  {
                data: { eventName: eventName,
                    location:  location,
                    numOfPlayers:numOfPlayers,
                    eventDate: eventDate,
                    duration: duration,
                    gameId: gameId,
                    hostId: '5ddda95251d90300133a6cf6' }
            });
            if(response.data.message === "Event Updated Successfully!"){
                alert('Event updated')
                navigation.navigate('Home')
            }
        } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
        }
    }


    const DeleteEvent = async () => {
        try {
            const response2 = await api.delete('/events/delete',  {
                data: {
                    _id: _id}
            });
                console.log(response2)
                alert('Event Deleted')
                navigation.navigate('Home')
            
        } catch (e) {
            setErrorMessageEvents('wooops someting did not work correctly');
        }
    }


 
    return (<View style={styles.page}>
        <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
            </TouchableOpacity>
        
        <View style={{ flex: 1 }}>
        <Text>{eName}</Text>
        <Text>{loca}</Text>
        <Text>{date}</Text>
        <Text>{num}</Text>
        <Text>{participants}</Text>
        <Text>Rate Players</Text>
        <Text>List of people with ratings box beside each name</Text>
        <TouchableOpacity  style={styles.but}onPress={() => null}>
            <Text>submit ratings</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.but}onPress={() => null}>
            <Text>leave Event</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.but}onPress={() => null}>
            <Text>Edit Event</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.but}onPress={UpdateEvent}>
            <Text>Submit Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.but}onPress={DeleteEvent}>
            <Text>Delete Event</Text>
        </TouchableOpacity>

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
   




        </View>
        
        
        
    </View>
    );
};

const styles = StyleSheet.create({
   
    but: {
        backgroundColor: '#add8e6',  //Light blue
        alignSelf: "center",
        padding: 10,
        borderRadius: 4,
        fontWeight: "bold",
        fontSize: 20,
        margin:5,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 15,
        

    },
    page:{
        marginTop: 30,
    },
}); 
export default EventsScreen;