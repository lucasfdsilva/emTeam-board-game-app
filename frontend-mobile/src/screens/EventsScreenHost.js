import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,Alert, Header, TextInput, KeyboardAvoidingView, ScrollView} from 'react-native';
import {Feather} from  '@expo/vector-icons';
import axios from 'axios';


    const EventsScreenHost = ({navigation,screenProps}) => {
    const _id = navigation.getParam('id');
    const dur = navigation.getParam('duration');
    const date = navigation.getParam('eventDate');
    const eName = navigation.getParam('eventName');
    const gameId = navigation.getParam('gameId');
    const hostID = navigation.getParam('hostId');
    const loca = navigation.getParam('location');
    const num = navigation.getParam('numOfPlayers');
    const participants = navigation.getParam('participants');
    const [eventName, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [numOfPlayers, setNumOfPlayers] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [duration, setDuration] = useState(''); 
    const [errorMessageEvents, setErrorMessageEvents] = useState('')

    const UpdateEvent = async () => {
        try {
                const response = await axios({
                    method: 'put',
                    url: 'http://apiboardgeek.co.uk/events/update',
                   
                data: { 
                    eventId: _id,
                    eventName: eventName,
                    gameId: gameId,
                    eventDate: eventDate,
                    location:  location,
                    numOfPlayers: numOfPlayers,
                    duration: duration,
  
                }
            });
            console.log(response.data)
            if(response.status==200){
                alert('Event updated')
                navigation.navigate('Events')
            }else{alert('Please enter valid info')}
        } catch (e) {
            //console.log('catch')
            //setErrorMessageEvents('wooops someting did not work correctly');
        }
    }


    const DeleteEvent = async () => {
        try {
            //console.log('try')
            const response1 = await axios({
                method: 'delete',
                url: 'http://apiboardgeek.co.uk/events/delete',
                data: {
                    eventId: _id},
            });
            console.log('try2')
            if(response1.status==200){
                alert('Event Deleted')
               // console.log(response1.data)
                navigation.navigate('Events')
            }else{alert('Please enter valid info')}
        
        } catch (e) {
           // console.log("catch")
           // setErrorMessageEvents('wooops someting did not work correctly');
        }
    }

    

const rateEvent = async () => {

alert('The feature will be available at a later date')
   }

 
    return (
        
            
    <View style={styles.page}>
       

        {/* <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
            </TouchableOpacity> */}
            <View style={styles.container}>
                 <View>
                     
                        <Text>Event name {eName}</Text>
                        <Text>Location {loca}</Text>
                        <Text>Duration {dur}</Text>
                        <Text>date {date}</Text>
                        <Text>Spaces {num}</Text>
                        <Text> Players {participants}</Text>
                        <Text>Event ID {_id}</Text>
                        <Text>Rate Players</Text>
                        <Text>List of people with ratings box beside each name</Text>
       
                        

                        <TouchableOpacity  style={styles.but}onPress={() => rateEvent()}>
                            <Text>submit ratings</Text>
                        </TouchableOpacity>


                        
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
                        <TouchableOpacity  style={styles.but}onPress={UpdateEvent}>
                            <Text>Submit Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.but}onPress={DeleteEvent}>
                            <Text>Delete Event</Text>
                        </TouchableOpacity>
                        </ScrollView>
                        

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
        flex: 1,
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