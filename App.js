import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
        }}>
        <Text style={{fontSize: 30, color: 'white'}}> Hello.........!! </Text>
      </View>
    );
  }
}
