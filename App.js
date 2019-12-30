import React, {Component} from 'react';
import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

class App extends Component {
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

App = codePush(codePushOptions)(App);
export default App;
