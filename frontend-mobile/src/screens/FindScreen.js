import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import axios from 'axios';
import EventsList from '../components/EventsList';
import EventsDetail from '../components/EventsDetail';
import Logo from '../components/Logo';
import {Feather} from  '@expo/vector-icons';

    const FindScreen = ({navigation,}) => {
    const gameid = navigation.getParam('id');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('name');
    const [resultsEvents, setResultsEvents,] = useState([]);
    const findEvents = async () => {

        try{
            const Url = 'http://apiboardgeek.co.uk/events/game/'+ gameid;
               const response = await axios({
                   method: 'get',
                   url: Url        
               });
               //console.log(response.data.message)
             //  if(response.data.message.length>0){
               // response.data.message.forEach(element => {
                    //console.log('push?')
                 //   resultsEvents.push(element)
                   // console.log(element)
                  //  });
               // }else{console.log('no evnets')}
              // console.log('-------------------------------')
             setResultsEvents(response.data.message)
             
             //resultsEvents.forEach(element=>{
             //  console.log(element.eventName)
            
          //  });
        

           }catch{
               console.log("catch")
           }
           
               
           }
           useEffect(() => {
            findEvents('gameid')
        }, []);

   try{
   console.log(resultsEvents.participants)
   }catch{}
   return (<View>
       <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
        </TouchableOpacity>

        <Image style={styles.image} source={{ uri: pic }} />
        <View>
        <Text>You wan to find a game of {name}</Text>
        <Text>The Games ID is {gameid}</Text>
        <Text>{resultsEvents.eventName}</Text>
        </View>
        <ScrollView >

            <EventsList title="Events for this game" //#repeat stuff, reapeat stuff repat stuff. 
                navigation={navigation}
            />

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
            </ScrollView>
            <Logo/>
    </View>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 200, 
        width: 200,
        alignItems: 'flex-end',
        marginLeft: 10,
        marginTop: 30,
    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 35,
        

    }
}); 
export default FindScreen;