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
import ValidationComponent from 'react-native-form-validator';

export default function SignupForm({}){

                
                 const [firstName, setFirstName] = useState('');
                 const [lastName, setLastName] = useState('');
                 const [email, setEmail] = useState('');
                 const [password, setPassword] = useState('');


 /*                showAlert1 = () => {
                    Alert.alert(
                      "Alert Title",
                      `${firstName, lastName, email, password}`,
                      [
                        { text: "Later", onPress: () => console.log(firstName, lastName, email, password) },
                        
                      ],
                      { cancelable: false }
                    );
                  }; */   
           async function handleRegister(){

            if(firstName==""){
              alert('Please fill in the "First Name" field');
              return null;
            }
            else if(lastName==""){
              alert('Please fill in the "Last Name" field');
              return null;
            }
            else if(email==""){
              alert('Please fill in the "Email" field');
              return null;
            }
            else if(password==""){
              alert('Please fill in the "Password" field');
              return null;
            }

                const response = await axios({
                method:   'post', 
                url: 'http://apiboardgeek.co.uk/users/register',
                data: { firstName: firstName, lastName: lastName, email: email, password: password }
            }); //end of const response = await axios
            //console.log('HELLO2')
            console.log(response.data)
            

            //validation: fields not blank, 

            Alert.alert(
              'Board Geek:',
               response.data.message + ', verification link was sent to: ' + response.data.user.email,
              [
                {text: 'Go to login', onPress: () => Actions.login()},
              ],
            );
        }


        return (

       <KeyboardAvoidingView style={styles.container} behavior = "padding" enabled>
            <View>
                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="First Name"
                placeholderTextColor = "#000000"
                selectionColor="#fcd9d9"
                keyboardType="default"
                value={firstName}
                onChangeText={setFirstName}
                onSubmitEditing={() => this.password.focus}
                />
                <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder="Last Name"
                placeholderTextColor = "#000000"
                selectionColor="#fcd9d9"
                keyboardType="default"
                value={lastName}
                onChangeText={setLastName}
                onSubmitEditing={() => this.password.focus}
                />
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
                <TouchableOpacity style = {styles.button} onPress={handleRegister}>
                    <Text style = {styles.buttonText}>Complete Registration</Text>
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