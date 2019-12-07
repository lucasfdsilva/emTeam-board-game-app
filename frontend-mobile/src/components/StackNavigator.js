import React, { Component } from 'react';
import { createStackNavigator, Header, } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import HomeScreen from'../screens/HomeScreen';
import GameScreen from '../screens/GameScreen';
import HostScreen from '../screens/HostScreen';
import FindScreen from '../screens/FindScreen';
import Login from '../screens/Login';
import ChangePassword from '../screens/ChangePassword';
import RestorePassword from '../screens/RestorePassword';
import Signup from '../screens/Signup';
import UserProfile from '../screens/UserProfile';
import SettingsScreen from '../screens/SettingsScreen';
import MyGamesScreen from '../screens/MyGamesScreen';
import EventsScreen from '../screens/EventsScreen';
import EditProfile from  '../screens/EditProfile';
import EventsScreenHost from '../screens/EventsScreenHost';
import EventsScreenJoin from '../screens/EventsScreenJoin';


const MyStackNavigator = createStackNavigator(
    
{
    Home: HomeScreen,
    Game: GameScreen,
    Host: HostScreen,
    Find: FindScreen,
    Login: Login,
    ChPW: ChangePassword,
    RPW: RestorePassword,
    SignUp: Signup,
    Profile: UserProfile,
    Settings: SettingsScreen,
    Events: MyGamesScreen, 
    Event: EventsScreen,
    EditProfile: EditProfile,
    EventH: EventsScreenHost,
    EventJ: EventsScreenJoin,


},
{
    initialRouteName:'Login',
    defaultNavigationOptions:{
        title: 'Board Geek',
      header: null, //this is to hide the navigation bar as it's partially blocking hte logo
    }
}
);

const AppContainer = createAppContainer(MyStackNavigator);
export default class StackNavigator extends Component{
    render(){
        return <AppContainer screenProps={
            {openDraw: ()=> this.props.navigation.openDrawer()}
        
        
    }/>;
    }
}