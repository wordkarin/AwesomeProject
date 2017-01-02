"use strict";
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
  TextInput, 
  AsyncStorage,
} from 'react-native';

// var STORE = ['red', 'green', 'blue', 'karin'];

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

var FlexDimensionsBasics = React.createClass({

  componentDidMount: function() {
      AsyncStorage.getItem("myKey").then((value) => {
          this.setState({"myKey": value});
      }).done();
  },

  getInitialState: function() {
    return { };
  },

  render() {
    let pic = {
      uri: 'https://facebook.github.io/react-native/img/react-native-congratulations.png'
    };

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Image source={pic} style={{width: 240, height: 240}}/>
          <Text style={styles.whatIsIt}>
            Today is: {moment().format("MMM Do, YYYY")}!
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.saved}>
            {this.state.myKey}
          </Text>
          <View>
            <TextInput style={styles.formInput} onChangeText={(text) => this.saveData(text)} value="" />
          </View>
          <Text style={styles.instructions}>
            Type something into the text box. It will be saved to device storage. Next time you open the application, the saved data will still exist.
          </Text>
        </View>


        <View style={{flex:1, flexDirection:'column'}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Blink text={<Greeting name='Karin' />} />
          </View>
          <View style={{flex: 1, backgroundColor: 'skyblue'}}>
            <Blink text={<Greeting name='Miles' />} />
          </View>
        </View>
      </View>
    );
  },

  saveData: function(value) {
    AsyncStorage.setItem("myKey", value);
    this.setState({"myKey": value});
  }
});

const styles = StyleSheet.create({
  container2: {
    padding: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
  },
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
  formInput: {
    flex: 1,
    height: 26,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#555555",
  },
  saved: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    marginTop: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
