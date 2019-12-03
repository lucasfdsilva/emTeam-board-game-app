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


const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin() {
		try{
		const response = await axios({
			method: 'post',
			url: 'http://apiboardgeek.co.uk/users/login',
			data: { email: email, password: password }
		});
		//console.log('HELLO')
		console.log(response.data)
		await AsyncStorage.setItem('accessToken', response.data.accessToken);
		const tempToken = await AsyncStorage.getItem('accessToken');
		await AsyncStorage.setItem('id', response.data.id);
		const tempId = await AsyncStorage.getItem('id');



		if (response.data.message == "User Logged in succesfully") {
			navigation.navigate('Profile',{tempId}) 
		} 
		
	}catch(e){alert('Login failed, please try again');}
		// 
		// return null;
		//  }

		//navigation.navigate('UserProfile');
		}

	return (
		<View style={styles.container}>
			<Logo />
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
			<TouchableOpacity style={styles.button} onPress={handleLogin}>
				<Text style={styles.buttonText}>Sign In</Text>
			</TouchableOpacity>
			</KeyboardAvoidingView>
			

			<View style={styles.signupTextContainer}>
				<Text style={styles.signupText}> No account? Hurry up and </Text>
				<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
					<Text style={styles.signupButton}> Sign Up</Text>
				</TouchableOpacity>
			</View>
			{/* <View>
				<Text style = {styles.signupText}> Navigate to </Text>
            	<TouchableOpacity onPress={this.UserProfile}>
            	 <Text style = {styles.signupButton}> profile</Text>
            	 </TouchableOpacity>
			</View>  */}
			<View style={styles.signupTextContainer}>
				<Text style={styles.signupText}> Forgot password? Reset it</Text>
				<TouchableOpacity onPress={() => navigation.navigate('RPW')}>
					<Text style={styles.signupButton}> here</Text>
				</TouchableOpacity>
			</View>
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

export default Login;