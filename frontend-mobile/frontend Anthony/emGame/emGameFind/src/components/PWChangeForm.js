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

export default function PWChangeForm({}){
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');



		async function handleChange(){
                const response = await axios({
                method: 'post', 
                url: 'http://apiboardgeek.co.uk/users/reset_password',
                data: {email: email, token: token, password: password}
			});
			
        console.log(response.data)
        //console.log('HELLO!!!')

		await AsyncStorage.setItem('message', response.data.message);
        const tempMessage = await AsyncStorage.getItem('message');

		Actions.Login();

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
	            />

            <TextInput style={styles.inputBox} 
	            underlineColorAndroid='rgba(0,0,0,0)' 
	            placeholder="Token"
	            placeholderTextColor = "#000000"
	            selectionColor="#fcd9d9"
				keyboardType="default"
				value={token}
                onChangeText={setToken}
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

	            <TouchableOpacity style = {styles.button} onPress={handleChange}>
	            	<Text style = {styles.buttonText}>Complete password change</Text>
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