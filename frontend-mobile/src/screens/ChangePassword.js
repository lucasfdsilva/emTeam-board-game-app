import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';


import Logo from '../components/Logo';
import PWChangeForm from '../components/PWChangeForm';

const ChangePassword= ({ navigation }) => {

        return (
        <View style = {styles.container}>
            <Logo/>
            <PWChangeForm type="ChangePassword"/>
            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Remembered password? </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Login')}>
            	<Text style = {styles.signupButton}> Sign In</Text>
            	</TouchableOpacity>
            </View>
        </View>
        );
    };


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
export default ChangePassword;