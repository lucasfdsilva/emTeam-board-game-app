import React, {useState, useEffect,Component} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from  '@expo/vector-icons';
import gameApi from '../api/gameApi'

    const GameScreen = ({navigation,screenProps}) => {
    const  [result, setResult] = useState([]);
    const id = navigation.getParam('id');
    const des = navigation.getParam('des');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('gName');
    const max = navigation.getParam('max');
    const min = navigation.getParam('min');
   // const getGame = async (id) => {
       
    //    const response = await gameApi.get('/search?', { 
     //       params: {
                
      //          ids: id,
      //          client_id: "SB1VGnDv7M"                    I was unable to get this code to work 

      //      }                                                                 :(
      //  });
         
      //   setResult(response.data);
  // };
   //  useEffect(() =>{
   //  getGame(id);
  // },[]);   
  // console.log(result); testing to see if result was getting anything it was. 

    return (<View style={styles.page}>
        <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
            </TouchableOpacity>
        
        <View style={{flexDirection: "row"}}>
            
        <Image style={styles.image} source={{ uri: pic }} />
        <View style={styles.col}>
        <TouchableOpacity style={styles.but}onPress={() => navigation.navigate('Host', { id, pic, name, max,min})}>
             <Text>Host Game</Text>
        </TouchableOpacity>
        
        <TouchableOpacity  style={styles.but}onPress={() => navigation.navigate('Find', { id, pic, name, max,min})}>
            <Text>Find Game</Text>
        </TouchableOpacity>
        </View>
        </View>
        <View style={{ flex: 1 }}>
        <Text>{name}</Text>
        <Text>{des}</Text>
        </View>
        
        
        
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200, 
        width: 200,
        alignItems: 'flex-end',
        marginLeft: 10,
        marginTop: 40,
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
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        marginTop: 15,
        

    },
    page:{
        marginTop: 30,
    },
    col:{
        flexDirection: "column",
        marginTop: 55,
        marginLeft: 20,

    }
}); 
export default GameScreen;