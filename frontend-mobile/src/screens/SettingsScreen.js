import React, { Component, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	Alert,
	} from 'react-native';

import axios from 'axios';
import Logo from '../components/Logo';


const SettingsScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const tempId = navigation.getParam('tempId');
    console.log(tempId)
    
    async function CheckDetail() {

		const response = await axios({
			method: 'post',
			url: 'http://apiboardgeek.co.uk/users/login',
			data: { email: email, password: password }
		});

        console.log(response.data)
       
		if (response.data.message == "User Logged in succesfully") {
			//alert('It is about to happen')
		DeletePro();
		}
	}

	async function DeletePro() {
		const tempId = await AsyncStorage.getItem('id');

		const response1 = await axios({		
			method: 'delete',
			url: 'http://apiboardgeek.co.uk/users/delete',
			data: { id: tempId, email: email, password:password}
		});
		await AsyncStorage.removeItem('id');
		await AsyncStorage.removeItem('accessToken');
		
		
		if(response1.status == 200) {
			navigation.navigate('Login')
			alert('Sorry to see you leave, account is deleted now')
			
			}
	}



	return (
		<View style={styles.container}>
			<Logo/>
			<Text> To delete your account enter details below</Text>
			<KeyboardAvoidingView style={styles.container2} behavior = "padding" enabled>
			<TextInput style={styles.inputBox}
				underlineColorAndroid='rgba(0,0,0,0)'
				placeholder="Email"
				placeholderTextColor="#000000"
				selectionColor="#fcd9d9"
				keyboardType="email-address"
				value={email}
				onChangeText={setEmail}
				onSubmitEditing={() => this.password.focus}
			/>
			<TextInput style={styles.inputBox}
				underlineColorAndroid='rgba(0,0,0,0)'
				placeholder="Password"
				secureTextEntry={true}
				placeholderTextColor="#000000"
				selectionColor="#fcd9d9"
				value={password}
				onChangeText={setPassword}
				ref={(input) => this.password = input}
			/>
			<TouchableOpacity style={styles.button} onPress={CheckDetail} /*onPress:() => navigation.navigate('Login')*/ >
				<Text style={styles.buttonText}>Delete</Text>
			</TouchableOpacity>
			</KeyboardAvoidingView>
			

		</View>
		
	);
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	signupTextContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginVertical: 16,
		flexDirection: 'row',
	},

	signupText: {
		fontSize: 16,
		color: '#000000',
	},

	signupButton: {
		color: '#b80000',
		fontSize: 17,
		fontWeight: '500'
	},

	button: {
		width: 300,
		backgroundColor: '#a19f9f',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 16,

	},

	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	},
	inputBox: {
		width: 300,
		backgroundColor: '#dedcdc',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 10,
		paddingVertical: 12

	},
	container2 : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

});

export default SettingsScreen;