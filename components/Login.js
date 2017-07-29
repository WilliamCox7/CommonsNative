import React from 'react';
import { Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { lcss } from './lcss/Login';
import logo from '../src/logo.png';

class Login extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
    this.auth = this.auth.bind(this);
  }

  componentDidMount() {
    this.props.navigation.navigate('Upload');
  }

  auth() {
    this.props.navigation.navigate('Welcome');
  }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <Image source={logo} />
        <View style={lcss.buttonContainer}>
          <TouchableOpacity style={lcss.button} activeOpacity={0.9}
            onPress={this.auth}>
            <Text style={lcss.buttonText}>log in with facebook</Text>
          </TouchableOpacity>
          <Text style={lcss.createText}>or</Text>
          <Text style={lcss.createText}>Create Account</Text>
        </View>
      </View>
    );
  }
}

export default Login;
