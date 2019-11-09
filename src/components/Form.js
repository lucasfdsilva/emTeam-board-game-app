import React, {Component, useState} from 'react';
import {
            StyleSheet,
            Text,
            View,
            KeyboardAvoidingView,
            TextInput,
            TouchableOpacity,
            AsyncStorage,
            Alert
            } from 'react-native';
import {Actions} from 'react-native-router-flux';
import api from '../services/api';
import axios from 'axios';

export default function Form({}){
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


		async function handleLogin(){
                const response = await axios({
                method: 'post', 
                url: 'http://3.248.36.112:5000/users/login',
                data: {email: email, password: password }
			});
			
			//console.log(response.data)
		await AsyncStorage.setItem('accessToken', response.data.accessToken);
		const tempToken = await AsyncStorage.getItem('accessToken');
		await AsyncStorage.setItem('id', response.data.id);
		const tempId = await AsyncStorage.getItem('id');

		//console.log('This is access token: ' + response.data.accessToken);
		//console.log(tempId);

        //navigation.navigate('UserProfile');
        }

		return (
        <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled>
	        <View>
	            <TextInput style={styles.inputBox} 
	            underlineColorAndroid='rgba(0,0,0,0)' 
	            placeholder="Email"
	            placeholderTextColor = "#000000"
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
	            placeholderTextColor = "#000000"
				selectionColor="#fcd9d9"
				value={password}
                onChangeText={setPassword}
	            ref={(input) => this.password = input}
	            />
	            <TouchableOpacity style = {styles.button} onPress={handleLogin}>
	            	<Text style = {styles.buttonText}>Sign In</Text>
	            </TouchableOpacity>
	        </View>
        </KeyboardAvoidingView>
        );
	
}

const styles = StyleSheet.create({


	container : {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	inputBox :{
		width: 300,
		backgroundColor: '#dedcdc',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		marginVertical: 10,
		paddingVertical: 12

	},

	button : {
		width: 300,
		backgroundColor: '#a19f9f',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 16,
		
	},

	buttonText : {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
	}


}); 