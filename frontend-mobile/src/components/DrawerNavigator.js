import React, { Component } from 'react';
import {Platform, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import StackNavigator from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import UserProfile from '../screens/UserProfile';



const MyDrawerNavigator = createDrawerNavigator({
    Stack:{ screen: StackNavigator},
    Dashboard: { screen:  HomeScreen},
    Settings: {screen: SettingsScreen},
    Logout: {screen: Login},
    Profile:{screen: UserProfile},

}, 
{
    initialRouteName:'Stack',
    drawerWidth: 300,
    drawerPosition: 'left',
}
);
const AppContainer = createAppContainer(MyDrawerNavigator);

export default class DrawerNavigator extends Component{
render(){
    return<AppContainer/>;
}
}
