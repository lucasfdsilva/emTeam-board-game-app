import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component<{}>{
    render(){
        return (
        <View style = {styles.container}>
            <Image style={{width:200, height:200}}
             source={require('../images/logo.png')}/>
             <Text style = {styles.logoText}>Board Geek</Text>
        </View>
        );

    }


}


const styles = StyleSheet.create({

	container : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

    logoText : {
        marginVertical: 15,
        fontSize: 18,
        color: '#000000',
    }

});