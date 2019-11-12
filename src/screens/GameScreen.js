import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import gameApi from '../api/gameApi'

const GameScreen = ({navigation}) => {
    const  [result, setResult] = useState([]);
    const id = navigation.getParam('id');
    const des = navigation.getParam('des');
    const pic = navigation.getParam('pic');
    const name = navigation.getParam('gName');

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

    return (<View>
        <Image style={styles.image} source={{ uri: pic }} />
        <Text>{name}</Text>
        <Text>{des}</Text>
        
        
        
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 300, 
        width: 200,
    }
}); 
export default GameScreen;