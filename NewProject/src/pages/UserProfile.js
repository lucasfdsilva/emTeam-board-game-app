import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';


export default class UserProfile extends Component<{}>{
	login(){
		Actions.login()
	}
	render(){
		return(
        <View style = {styles.container}>
            <Logo/>
            <Text>Email</Text>
            <Text>Phone number</Text>
            <Text>Bio</Text>
            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> To go back click </Text>
            	<TouchableOpacity onPress={this.login}>
            	<Text style = {styles.signupButton}> here </Text>
            	</TouchableOpacity>
            </View>
        </View>

		);
	}

}

const styles = StyleSheet.create({

	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	signupTextContainer : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginVertical: 16,
		flexDirection: 'row',
	},

	signupText : {
        fontSize: 16,
        color: '#000000',
	},

	signupButton : {
		color: '#b80000',
		fontSize: 17,
		fontWeight: '500'
	}

});