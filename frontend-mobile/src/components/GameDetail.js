import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

 
const gameDetail = ({ result }) => {
    var rating = result.average_user_rating;// result.average_user_rating assigned to var to allow me to use the toFixed
    try {rating = rating.toFixed(1)} 
    catch{return null} //had to a a try/catch as toFixed was havinf issues when navigating user. 
    return (<View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.thumb_url }} />
        <Text style={styles.name}>{result.name}</Text>
        <Text>{result.num_user_ratings} Reviews, {rating} Stars</Text>
    </View>);
};


const styles = StyleSheet.create({
    container: {
        marginLeft: 15

    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        marginBottom: 5

    },
    name: {
        fontWeight: 'bold',
        fontSize: 15 //native size is 14
    }
});

export default gameDetail;