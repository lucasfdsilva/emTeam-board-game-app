import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput,AsyncStorage } from 'react-native';
import axios from 'axios';

import Logo from '../components/Logo';
//import PWResetForm from '../components/PWResetForm';

const ResorePassword = ({navigation}) => { 
	const [email, setEmail] = useState('');



		async function handleReset(){
                const response = await axios({
                method: 'post', 
                url: 'http://apiboardgeek.co.uk/users/forgot_password',
                data: {email: email}
			});
            
            //Actions.ChangePW();
            
		console.log(response.data)
		//console.log('HELLO')
			try{
        navigation.navigate('ChPW')
			}catch (e) {
				console.log('Something went terribly wrong with navigation to the Password change form')
			}
        }	
	
    
        return (
			<KeyboardAvoidingView style={styles.container2} behavior = "padding" enabled>
        <View style = {styles.container}>
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

	            <TouchableOpacity style = {styles.button} onPress={handleReset}>
	            	<Text style = {styles.buttonText}>Send reset request</Text>
	            </TouchableOpacity>
	        </View>
            <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> No account? Hurry up and </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            	 <Text style = {styles.signupButton}> Sign Up</Text>
            	 </TouchableOpacity>
            </View>
        </View>
		</KeyboardAvoidingView>
        );
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
	},

	
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
export default ResorePassword;