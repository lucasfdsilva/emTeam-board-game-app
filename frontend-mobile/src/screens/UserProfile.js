import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import Logo from '../components/Logo';


const UserProfile  = ({ navigation }) => { 
	const [myName, setMyName] = useState(true);
	const [profile, setProfile,] = useState([]);
	//const myname = response.data.message.firstName;

	try{
	
	const tempId = navigation.getParam('tempId');
		
		async function loadProfile(){	
			const response = await axios({
			method: 'get',
			url: `http://apiboardgeek.co.uk/users/${tempId}`,
			//data: { id: tempId }
			
		});
		alert(`Hello, ${response.data.message.firstName}`)
		//console.log(response.data)
		setProfile(response.data.message)

		try {
			  const value = await AsyncStorage.getItem('accessToken')
			  console.log(value)
		} catch(e) {
			  // read error
			}
		  
			
		  
		  
		// myName = `${response.data.message.firstName}`
		// console.log(myName);
		// await AsyncStorage.setItem('myName', response.data.message.firstName);
		// const myName = await AsyncStorage.getItem('myName');
	}
	// async function assignData(){
	// 	await AsyncStorage.setItem('firstName', response.data.message.firstName);
	// 	const myName = await AsyncStorage.getItem('firstName');
	// }
	useEffect( () => {
		loadProfile()
		//assignData()
		//AsyncStorage.getItem('myName')
		
			//setMyName(myName);
		
		
		
	},[]);
}catch(e){alert('Did not work, try again')};

		return(
        <View style = {styles.container}>
            <Logo/>

            <View style = {styles.emailBox}>
		<Text style = {styles.titleText}>{profile.firstName} {profile.lastName} </Text>
            </View> 

            <View style = {styles.phoneBox}>
		<Text style = {styles.titleText}>Rating: {profile.averageStar}</Text>
            </View>

            <View style = {styles.bioBox}>
            <Text style = {styles.titleText}>Your events: {profile.joinedEvents}</Text>
            </View>

            {/* <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> To go back click </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Login')}>
            	<Text style = {styles.signupButton}> here </Text>
            	</TouchableOpacity>
            </View> */}

		{/* <View style={styles.fixToText}>
		  <Button 
		  	style={styles.leftButton} 
            title="Edit account"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
		  	style={styles.leftButton} 
            title="Go to games dashboard"
            onPress={() => navigation.navigate('Home')}
          />
        </View> */}

			<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
				<Text style={styles.buttonText}>Go to Dashboard</Text>
			</TouchableOpacity>
		
			{/* <View style = {styles.signupTextContainer}>
            	<Text style = {styles.signupText}> Check Anthony's part  </Text>
            	<TouchableOpacity onPress={() => navigation.navigate('Home')}>
            	<Text style = {styles.signupButton}> here </Text>
            	</TouchableOpacity>
            </View> */}
        </View>

		);
	}



const styles = StyleSheet.create({

	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	leftButton : {
		padding: 10,
		margin: 10,
	},

	emailBox : {
		//backgroundColor: '#f5e6e6',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
	},

	phoneBox : {
		//backgroundColor: '#e0e0e0',
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'stretch',
	},

	bioBox : {
		//backgroundColor: '#c9c7c7',
        flex: 1,
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

	button: {
		width: 200,
		backgroundColor: '#a19f9f',
		borderRadius: 10,
		marginVertical: 10,
		paddingVertical: 10,

	},

	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center',
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
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	  },

	titleText : {
		fontSize: 20,
		fontWeight: '500',
		alignContent: "center",
	}

});
export default UserProfile;