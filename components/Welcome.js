import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { lcss } from './lcss/Welcome';

class Welcome extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
    this.getStarted = this.getStarted.bind(this);
  }

  getStarted() {
    this.props.navigation.navigate('Hobbies');
  }

  render() {
    return (
      <Image source={require('../src/bubbles.jpg')} style={lcss.backgroundImage}>
        <View style={lcss.viewContainer}>
          <Text style={lcss.welcomeText}>W E L C O M E</Text>
          <Text style={lcss.introText}>
            The commons app is the
            most unique dating with its
            signature matching user
            interface. The five circle
            dial is where it’s at yo.
          </Text>
          <TouchableOpacity style={lcss.button} activeOpacity={0.9}
            onPress={this.getStarted}>
            <Text style={lcss.buttonText}>let's get started</Text>
          </TouchableOpacity>
          <View style={lcss.overlay}></View>
        </View>
      </Image>
    );
  }
}

export default Welcome;
