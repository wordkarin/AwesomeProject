var moment = require('moment');
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

class Greeting extends Component {
  render(){
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.welcome}>{display}</Text>
    );
  }
}

class FlexDimensionsBasics extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'
    };

    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 50, textAlign:'center'}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({text})}
            />
            <Text style={{padding: 10, fontSize: 42}}>
              {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
          </View>

        <View style={styles.container}>
          <Image source={pic} style={{width: 240, height: 240}}/>
          <Text style={styles.whatIsIt}>
            Today is: {moment().format("MMM Do, YYYY")}!
          </Text>
        </View>

        <View style={{flex:1, flexDirection:'column'}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Blink text={<Greeting name='Karin' />} />
          </View>
        </View>
      </View>
    );
  }
};

// export default class AwesomeProject extends Component {
//   render() {
//
//     return (
//
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  whatIsIt: {
    color: '#ff6643',
    fontWeight: 'bold',
    fontSize: 30,
  },
  gray: {
    color: 'gray',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
