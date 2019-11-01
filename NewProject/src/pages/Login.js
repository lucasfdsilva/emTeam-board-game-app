import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}>{
	signup(){
		Actions.signup()
	}
    render(){
        return (
        <View style = {styles.container}>
            <Logo/>
            <Form type="Login"/>
            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> No account? Hurry up and </Text>
            	<TouchableOpacity onPress={this.signup}>
            	 <Text style = {styles.signupButton}> Sign Up</Text>
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