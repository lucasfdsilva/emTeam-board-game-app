import React, { useState, useEffect, Component} from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {Feather} from  '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import GameList from '../components/GameList';
import gameApi from '../api/gameApi';
import Logo from '../components/Logo';

 
    const HomeScreen = ({ navigation,screenProps}) => {
    const [name, setTerm] = useState('');
    const [results, setResults,] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    //const openDraw = ()=> this.props.navigation.openDrawer();

    const searchApi = async (searchName) => {
        try {
            const response = await gameApi.get('/search?order_by=popularity&ascending=false', {
                params: {

                    limit: 100,
                    name: searchName,
                    client_id: "SB1VGnDv7M",

                }
            });
            setResults(response.data.games);
        } catch (e) {
            setErrorMessage('  External API is down, please try again later');
        }
    }
    useEffect(() => {
        searchApi('');
    }, []);

    const startApi = async (limit) => {
        try {
            const response = await gameApi.get('/search?order_by=popularity', {
                params: {

                    limit: limit,
                    client_id: "SB1VGnDv7M"

                }
            });
            setResults(response.data.games);
            //console.log("request made"); for testing

        } catch (e) {
            setErrorMessage('External API is down, please try again later');
        }
    }

    useEffect(() => {
        startApi(100);
    }, []);

    //console.log(results);  for testing 
    const filterGamesByID = (category) => results.filter(result => result.categories.some(cat => cat.id == category)); // searching array for objects with a category macthign the lists below
    const filterGamesNCAT = () => results.filter(result => result.categories.length == 0); // searching array for objects will no catagory

   
   return (<View style={{ flex: 1 }}>

      
           
        <SearchBar term={name}
            onSearch={setTerm}
            onTermSearch={() => searchApi(name)}
        />
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <TouchableOpacity  onPress={() => screenProps.openDraw()}> 
                <Feather style={styles.iconStyle} name ="menu"></Feather>
        </TouchableOpacity>
        <View>
            <TouchableOpacity onPress={() => startApi(100)}>
                <Text style={styles.geek}>Dashboard</Text>
            </TouchableOpacity>
        </View>
        


        <ScrollView>

            <GameList title="Adventure" results={filterGamesByID("KUBCKBkGxV")}//#repeat stuff, reapeat stuff repat stuff. 
                navigation={navigation}
            />
            <GameList title="Age of Reason" results={filterGamesByID("20iDvpbh7A")}
                navigation={navigation}
            />
            <GameList title="Alternate History" results={filterGamesByID("nWDac9tQzt")}
                navigation={navigation}
            />
            <GameList title="Ancient" results={filterGamesByID("a8NM5cugJX")}
                navigation={navigation}
            />
            <GameList title="Animals" results={filterGamesByID("MWoxgHrOJD")}
                navigation={navigation}
            />
            <GameList title="Apocalyptic" results={filterGamesByID("eFaACC6y2c")}
                navigation={navigation}
            />
            <GameList title="Art" results={filterGamesByID("k0dglq5j6N")}
                navigation={navigation}
            />
            <GameList title="Aviation" results={filterGamesByID("QB4sEpx1Uu")}
                navigation={navigation}
            />
            <GameList title="Bluffing" results={filterGamesByID("PinhJrhnxU")}
                navigation={navigation}
            />
            <GameList title="Campaign" results={filterGamesByID("fW5vusE96B")}
                navigation={navigation}
            />
            <GameList title="Card Game" results={filterGamesByID("eX8uuNlQkQ")}
                navigation={navigation}
            />
            <GameList title="Children's Game" results={filterGamesByID("HKaYVNIxAJ")}
                navigation={navigation}
            />
            <GameList title="City Building" results={filterGamesByID("ODWOjWAJj3")}
                navigation={navigation}
            />
            <GameList title="Civil War" results={filterGamesByID("w8XD66FUZ2")}
                navigation={navigation}
            />
            <GameList title="Civilization" results={filterGamesByID("329DxyFL9D")}
                navigation={navigation}
            />
            <GameList title="Collectible Components" results={filterGamesByID("vXxLT0FDTZ")}
                navigation={navigation}
            />
            <GameList title="Comic Book / Strip" results={filterGamesByID("G5kfqnPBP6")}
                navigation={navigation}
            />
            <GameList title="Conversation" results={filterGamesByID("iTvYWFmD1c")}
                navigation={navigation}
            />
            <GameList title="Cooperative" results={filterGamesByID("ge8pIhEUGE")}
                navigation={navigation}
            />
            <GameList title="Cyberpunk" results={filterGamesByID("Ef4oYLHNhI")}
                navigation={navigation}
            />
            <GameList title="Deduction" results={filterGamesByID("bCBXJy9qDw")}
                navigation={navigation}
            />
            <GameList title="Dexterity" results={filterGamesByID("bKrxqD9mYc")}
                navigation={navigation}
            />
            <GameList title="Dice" results={filterGamesByID("mavSOM8vjH")}
                navigation={navigation}
            />
            <GameList title="Dinosaurs" results={filterGamesByID("UuxiExraPF")}
                navigation={navigation}
            />
            <GameList title="Drinking" results={filterGamesByID("We3MM46qBr")}
                navigation={navigation}
            />
            <GameList title="Dungeons & Dragons" results={filterGamesByID("ZEW7DPFAE6")}
                navigation={navigation}
            />
            <GameList title="Economic" results={filterGamesByID("N0TkEGfEsF")}
                navigation={navigation}
            />
            <GameList title="Educational" results={filterGamesByID("B3NRLMK4xD")}
                navigation={navigation}
            />
            <GameList title="Electronic" results={filterGamesByID("crxgUzJSEz")}
                navigation={navigation}
            />
            <GameList title="Environmental" results={filterGamesByID("gsekjrPJz0")}
                navigation={navigation}
            />
            <GameList title="Espionage" results={filterGamesByID("u5ZiYctU6T")}
                navigation={navigation}
            />
            <GameList title="Eurogame" results={filterGamesByID("h8wfZG0j3I")}
                navigation={navigation}
            />
            <GameList title="Expansion" results={filterGamesByID("v4SfYtS2Lr")}
                navigation={navigation}
            />
            <GameList title="Exploration" results={filterGamesByID("yq6hVlbM2R")}
                navigation={navigation}
            />
            <GameList title="Family Game" results={filterGamesByID("7rV11PKqME")}
                navigation={navigation}
            />
            <GameList title="ctumBZyj5l" results={filterGamesByID("Fan Made")}
                navigation={navigation}
            />
            <GameList title="Fantasy" results={filterGamesByID("ZTneo8TaIO")}
                navigation={navigation}
            />
            <GameList title="Farming" results={filterGamesByID("Wr8uXcoR9p")}
                navigation={navigation}
            />
            <GameList title="Fighting" results={filterGamesByID("upXZ8vNfNO")}
                navigation={navigation}
            />
            <GameList title="Fishing" results={filterGamesByID("zNxFBqBHXA")}
                navigation={navigation}
            />
            <GameList title="Flicking" results={filterGamesByID("3NDxCLUny4")}
                navigation={navigation}
            />
            <GameList title="Food" results={filterGamesByID("YrDuNj8lvr")}
                navigation={navigation}
            />
            <GameList title="Gay" results={filterGamesByID("H9Ef643lYf")}
                navigation={navigation}
            />
            <GameList title="Halloween" results={filterGamesByID("NR0vgCx5R7")}
                navigation={navigation}
            />
            <GameList title="Horror" results={filterGamesByID("cAIkk5aLdQ")}
                navigation={navigation}
            />
            <GameList title="Humor" results={filterGamesByID("TYnxiuiI3X")}
                navigation={navigation}
            />
            <GameList title="Industry/Manufacturing" results={filterGamesByID("zqFmdU4Fp2")}
                navigation={navigation}
            />
            <GameList title="Japan" results={filterGamesByID("R7PTH00PmO")}
                navigation={navigation}
            />
            <GameList title="Kickstarter" results={filterGamesByID("rrvd68LjOR")}
                navigation={navigation}
            />
            <GameList title="Legacy" results={filterGamesByID("XeYUw9159M")}
                navigation={navigation}
            />
            <GameList title="Luck" results={filterGamesByID("nHZiDOXNla")}
                navigation={navigation}
            />
            <GameList title="Mafia" results={filterGamesByID("pIMmuVYnQp")}
                navigation={navigation}
            />
            <GameList title="Math" results={filterGamesByID("POlqwScVxD")}
                navigation={navigation}
            />
            <GameList title="Mature / Adult" results={filterGamesByID("ZhlfIPxYsw")}
                navigation={navigation}
            />
            <GameList title="Mecha" results={filterGamesByID("c1AnMUJrTF")}
                navigation={navigation}
            />
            <GameList title="Medical" results={filterGamesByID("AeWXMxbm91")}
                navigation={navigation}
            />
            <GameList title="Medieval" results={filterGamesByID("QAYkTHK1Dd")}
                navigation={navigation}
            />
            <GameList title="Memory" results={filterGamesByID("AujCle9cUq")}
                navigation={navigation}
            />
            <GameList title="Miniatures" results={filterGamesByID("FC6ElKI9tk")}
                navigation={navigation}
            />
            <GameList title="Modern Warfare" results={filterGamesByID("L6NUwNdblq")}
                navigation={navigation}
            />
            <GameList title="Movie Theme" results={filterGamesByID("TJnR5obHsQ")}
                navigation={navigation}
            />
            <GameList title="Movies / TV / Radio theme" results={filterGamesByID("Sod2YBWMKi")}
                navigation={navigation}
            />
            <GameList title="Murder/Mystery" results={filterGamesByID("Kk70K0524Z")}
                navigation={navigation}
            />
            <GameList title="Mythology" results={filterGamesByID("MHkqIVxwtx")}
                navigation={navigation}
            />
            <GameList title="Napoleonic" results={filterGamesByID("IpcJzp0TVC")}
                navigation={navigation}
            />
            <GameList title="Nautical" results={filterGamesByID("vqZ5XzGWQD")}
                navigation={navigation}
            />
            <GameList title="Negotiation" results={filterGamesByID("jZEDOpx07e")}
                navigation={navigation}
            />
            <GameList title="Ninja's" results={filterGamesByID("mWb5kHTAg1")}
                navigation={navigation}
            />
            <GameList title="Ninjas" results={filterGamesByID("rtslXnT90O")}
                navigation={navigation}
            />
            <GameList title="Novel-based" results={filterGamesByID("dO9HVl2TW7")}
                navigation={navigation}
            />
            <GameList title="Party Game" results={filterGamesByID("X8J7RM6dxX")}
                navigation={navigation}
            />
            <GameList title="Pirates" results={filterGamesByID("9EIayX6n5a")}
                navigation={navigation}
            />
            <GameList title="Political" results={filterGamesByID("TKQncFVX74")}
                navigation={navigation}
            />
            <GameList title="Post-Apocalyptic" results={filterGamesByID("8Z7nWG2kOw")}
                navigation={navigation}
            />
            <GameList title="Post-Napoleonic" results={filterGamesByID("5APB1MWk6X")}
                navigation={navigation}
            />
            <GameList title="Prehistoric" results={filterGamesByID("YyszHun1HP")}
                navigation={navigation}
            />
            <GameList title="Print & Play" results={filterGamesByID("ov6sEmlkiC")}
                navigation={navigation}
            />
            <GameList title="Prison Escape" results={filterGamesByID("dAyk5NtNTV")}
                navigation={navigation}
            />
            <GameList title="Puzzle" results={filterGamesByID("WVMOS3s2pb")}
                navigation={navigation}
            />
            <GameList title="Queer" results={filterGamesByID("c6nnwyDdnl")}
                navigation={navigation}
            />
            <GameList title="RPG" results={filterGamesByID("2Gu62aKdma")}
                navigation={navigation}
            />
            <GameList title="Racing" results={filterGamesByID("tQGLgwdbYH")}
                navigation={navigation}
            />
            <GameList title="Real-time" results={filterGamesByID("PzWI2uaif0")}
                navigation={navigation}
            />
            <GameList title="Religious" results={filterGamesByID("DRqeVkXWqX")}
                navigation={navigation}
            />
            <GameList title="Renaissance" results={filterGamesByID("nuHYRFmMjU")}
                navigation={navigation}
            />
            <GameList title="Resource Management" results={filterGamesByID("zyj9ZK3mHB")}
                navigation={navigation}
            />
            <GameList title="Romance" results={filterGamesByID("E5rYwP0Ybr")}
                navigation={navigation}
            />
            <GameList title="Sci-Fi" results={filterGamesByID("3B3QpKvXD3")}
                navigation={navigation}
            />
            <GameList title="Socialite" results={filterGamesByID("c6ei4hkUxm")}
                navigation={navigation}
            />
            <GameList title="Solo / Solitaire" results={filterGamesByID("VzyslQJGrG")}
                navigation={navigation}
            />
            <GameList title="Space Exploration" results={filterGamesByID("0MdRqhkNpw")}
                navigation={navigation}
            />
            <GameList title="Spies/Secret Agents" results={filterGamesByID("Hc6vcim5DS")}
                navigation={navigation}
            />
            <GameList title="Sports" results={filterGamesByID("hShsL2DktG")}
                navigation={navigation}
            />
            <GameList title="Strategy" results={filterGamesByID("O0ogzwLUe8")}
                navigation={navigation}
            />
            <GameList title="Superhero" results={filterGamesByID("usFW8szGAq")}
                navigation={navigation}
            />
            <GameList title="Tech" results={filterGamesByID("yHTeXNjln0")}
                navigation={navigation}
            />
            <GameList title="Territory Building" results={filterGamesByID("buDTYyPw4D")}
                navigation={navigation}
            />
            <GameList title="Theme Park" results={filterGamesByID("vCzpbYT7RU")}
                navigation={navigation}
            />
            <GameList title="Trains" results={filterGamesByID("JwHcKqxh33")}
                navigation={navigation}
            />
            <GameList title="Transportation" results={filterGamesByID("CWYOF9xu7O")}
                navigation={navigation}
            />
            <GameList title="Travel" results={filterGamesByID("TR4CiP8Huj")}
                navigation={navigation}
            />
            <GameList title="Trivia" results={filterGamesByID("YGHGDjahKY")}
                navigation={navigation}
            />
            <GameList title="Video Game Theme" results={filterGamesByID("djokexoK0U")}
                navigation={navigation}
            />
            <GameList title="War" results={filterGamesByID("ssZjU3HETz")}
                navigation={navigation}
            />
            <GameList title="Wargame" results={filterGamesByID("jX8asGGR6o")}
                navigation={navigation}
            />
            <GameList title="Western" results={filterGamesByID("EHUBCITA3t")}
                navigation={navigation}
            />
            <GameList title="Word Game" results={filterGamesByID("rHvAx4hH2f")}
                navigation={navigation}
            />
            <GameList title="Zombies" results={filterGamesByID("FmGV9rVu1c")}
                navigation={navigation}
            />

            <GameList title="Undefined Category" results={filterGamesNCAT(null)}
                navigation={navigation}
            />
            <Logo style={styles.logo} />
        </ScrollView>
    </View>
    );
};


const styles = StyleSheet.create({
    geek: {

        fontSize: 15, //native size is 14
        alignSelf: 'center',
    },
    logo: {

        paddingTop: 30,

    },
    iconStyle: {
        fontSize: 25,
        alignSelf: 'auto',
        

    }
});

export default HomeScreen; 