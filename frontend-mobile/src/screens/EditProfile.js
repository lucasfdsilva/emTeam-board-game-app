import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import axios from 'axios';
import Constants from 'expo-constants';

import Logo from '../components/Logo';
//import PWChangeForm from '../components/PWChangeForm';

const EditProfile = ({  navigation }) => { 
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
	const [id, setId] = useState('');
    const [password, setPassword] = useState('');

	
		

		async function handleChange(){
				const tempId = await AsyncStorage.getItem('id');
                const response = await axios({
                method: 'PUT', 
                url: 'http://apiboardgeek.co.uk/users/update',
				data: {id: tempId, email: email, firstName: firstName, lastName: lastName, password: password}

			});
		
        console.log(response.data)
        //console.log('HELLO!!!')
		//Actions.Login();
	
        navigation.navigate('Profile');
        }
	
        return (
			<KeyboardAvoidingView style={styles.container2} behavior={"position"} keyboardVerticalOffset={Constants.statusBarHeight}>
			<Logo/>
			
	        <View>
			<TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="New First Name"
                placeholderTextColor = "#000000"
                selectionColor="#fcd9d9"
                keyboardType="default"
                value={firstName}
                onChangeText={setFirstName}
                onSubmitEditing={() => this.password.focus}
                />
				
                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="New Last Name"
                placeholderTextColor = "#000000"
                selectionColor="#fcd9d9"
                keyboardType="default"
                value={lastName}
                onChangeText={setLastName}
                onSubmitEditing={() => this.password.focus}
                />

            <TextInput style={styles.inputBox} 
	            underlineColorAndroid='rgba(0,0,0,0)' 
	            placeholder="New Email"
	            placeholderTextColor = "#000000"
	            selectionColor="#fcd9d9"
				keyboardType="email-address"
				value={email}
                onChangeText={setEmail}
	            />  

			{/* <TextInput style={styles.inputBox} 
	            underlineColorAndroid='rgba(0,0,0,0)' 
	            placeholder="Copy your User ID here"
	            placeholderTextColor = "#000000"
	            selectionColor="#fcd9d9"
				keyboardType="default"
				value={id}
                onChangeText={setId}
	            /> */}
			
			<TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="New password"
                secureTextEntry={true}
                placeholderTextColor = "#000000"
                selectionColor="#fcd9d9"
                value={password}
                onChangeText={setPassword}
                ref={(input) => this.password = input}
                />
			
	            <TouchableOpacity style = {styles.button} onPress={handleChange}>
	            	<Text style = {styles.buttonText}>Confirm and submit changes</Text>
	            </TouchableOpacity>
	        </View>
			 <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Cancel all changes and </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            	<Text style = {styles.signupButton}> go back</Text>
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
export default EditProfile;