import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../componets/Logo';


export default class UserProfile extends Component<{}>{
	login(){
		Actions.login()
	}
	Home(){
		Actions.Home()
	}
	render(){
		return(
        <View style = {styles.container}>
            <Logo/>

            <View>
            <Text>Colors are temporary.</Text>
            </View>

            <View style = {styles.emailBox}>
            <Text style = {styles.titleText}>Email</Text>
            </View>

            <View style = {styles.phoneBox}>
            <Text style = {styles.titleText}>Phone number</Text>
            </View>

            <View style = {styles.bioBox}>
            <Text style = {styles.titleText}>Bio</Text>
            </View>

            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> To go back click </Text>
            	<TouchableOpacity onPress={this.login}>
            	<Text style = {styles.signupButton}> here </Text>
            	</TouchableOpacity>
            </View>
			<View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Check Anthony's part  </Text>
            	<TouchableOpacity onPress={this.Home}>
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
		alignItems: 'center',
	},

	emailBox : {
		backgroundColor: '#f5e6e6',
        flex: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
	},

	phoneBox : {
		backgroundColor: '#e0e0e0',
        flex: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
	},

	bioBox : {
		backgroundColor: '#c9c7c7',
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
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
	},

	titleText : {
		fontSize: 20,
		fontWeight: '500',
	}

});