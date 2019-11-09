import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const gameDetail = ({ result }) => {
    return (<View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.num_user_ratings}reviews, {result.average_user_rating}rating</Text>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },
    image: {
        width: 120,
        height: 250,
        borderRadius: 4,
        marginBottom: 5

    },
    name: {
        fontWeight: 'bold',
        fontSize: 15 //native size is 14
    }
});

export default gameDetail;