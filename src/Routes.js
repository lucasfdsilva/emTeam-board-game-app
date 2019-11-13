import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './screens/Login';
import Signup from './screens/Signup';
import UserProfile from './screens/UserProfile';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import RestorePassword from './screens/RestorePassword';

export default class Routes extends Component<{}>{
	render(){
		return(
			  	<Router>
    				<Stack key="root" hideNavBar={true}>
      					<Scene key="login" component={Login} title="Login" initial={true} />
      					<Scene key="signup" component={Signup} title="Signup" />
      					<Scene key="UserProfile" component={UserProfile} title="Profile" />
						<Scene key="Home" component={HomeScreen} title="HomeScreen" />
						<Scene key="Game" component={GameScreen} title="GameScreen" />
						<Scene key="ForgotPW" component={RestorePassword} title="Password restore page"/>	
    				</Stack>
  				</Router>	
			)
	}
}
