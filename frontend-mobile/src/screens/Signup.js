import React, {useState} from 'react';
import {             StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
	AsyncStorage,
	Alert } from 'react-native';

	import axios from 'axios';
import Logo from '../components/Logo';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
//import SignupForm from '../components/SignupForm';

const Signup  = ({ navigation }) => { 
	                
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
   {text: 'Go to login', onPress: () => navigation.navigate('Login')},
 ],
);
}	
    
        return (
			<KeyboardAvoidingView style={styles.container2} behavior = "padding">

            <View>
			<Logo/>
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
				<View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Already have an account? </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Login')}>
            	<Text style = {styles.signupButton}> Sign In</Text>
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
export default Signup;