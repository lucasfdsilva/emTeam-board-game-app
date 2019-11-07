import React, {Component} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Routes from './src/Routes';
//import UserProfile from './src/pages/UserProfile';

export default class App extends Component<{}> {
    render(){
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ffffff"
                    barStyle="light-content"
                    />

                <Routes/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  }
});
