import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GameDetail from './GameDetail';

const GameList = ({ title, results, navigation }) => { //setting the titals to pass down prop names from home screen
    return (<View style={styles.container}>
        <Text style={styles.title}> {title} </Text>
        <Text>{results.length} results</Text>
        <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {

                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Game', { id: item.id, des: item.description, pic: item.image_url, gName: item.name })}>
                        <GameDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10
    },
    container: {
        marginBottom: 8
    }

});

export default GameList;