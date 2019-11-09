import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../componets/SearchBar';
import GameList from '../componets/GameList';
import gameApi from '../api/gameApi';

const HomeScreen = ({ navigation }) => {
    const [name, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchName) => {
        try {
            const response = await gameApi.get('/search?order_by=popularity&ascending=false', {
                params: {

                    limit: 100,
                    name: searchName,
                    client_id: "SB1VGnDv7M"

                }
            });
            setResults(response.data.games);
        } catch (e) {
            setErrorMessage('wooops someting did not work correctly');
        }
    }

    useEffect(() => {
        searchApi('monopoly');
    }, []);

    //console.log(results);  for testing 
    const filterGamesByID = (max_playtime) => {
        return results.filter(result => {
            if (result.max_playtime <= max_playtime) return result.max_playtime;
        })

    };

    return (<View style={{ flex: 1 }}>
        <SearchBar term={name}
            onSearch={setTerm}
            onTermSearch={() => searchApi(name)}
        //onTermSearch={()=> console.log('Search submitted')}//Will change to search API 
        //onTermSearch={()=>searchApi(name)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>Dash board</Text>
        <Text> We have found {results.length} results </Text>
        <ScrollView>

            <GameList title="30 min or less" results={filterGamesByID(30)}
                navigation={navigation}
            />
            <GameList title="90 min or less" results={filterGamesByID(90)}
                navigation={navigation}
            />
            <GameList title="150 or less" results={filterGamesByID(150)}
                navigation={navigation}
            />
            <GameList title="150 or more" results={filterGamesByID(1500)}
                navigation={navigation}
            />
            <Text>you looked 4 {name}</Text>
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen; 