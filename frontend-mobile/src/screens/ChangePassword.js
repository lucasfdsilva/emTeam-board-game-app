import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import axios from 'axios';

import Logo from '../components/Logo';
//import PWChangeForm from '../components/PWChangeForm';

const ChangePassword = ({  navigation }) => { 
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
		//Actions.Login();

        navigation.navigate('Login');
        }

        return (
			<KeyboardAvoidingView style={styles.container2} behavior = "padding" enabled>
			<Logo/>
			
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
			<View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Remembered password? </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Login')}>
            	<Text style = {styles.signupButton}> Sign In</Text>
            	</TouchableOpacity>
            </View>
			</KeyboardAvoidingView>
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
	},
	container2 : {
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
export default ChangePassword;