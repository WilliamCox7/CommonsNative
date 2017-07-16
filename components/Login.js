import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import logo from '../src/logo.png';

class Login extends React.Component {

  constructor() {
    super();
    this.auth = this.auth.bind(this);
  }

  auth() {
    
  }

  render() {

    var gcss = StyleSheet.create(this.props.css);

    return (
      <View style={lcss.viewContainer}>
        <Image source={logo} />
        <View style={lcss.buttonContainer}>
          <TouchableOpacity style={lcss.fbButton} activeOpacity={0.9} onPress={this.auth}>
            <Text style={lcss.fbButtonText}>log in with facebook</Text>
          </TouchableOpacity>
          <Text style={lcss.otherText}>or</Text>
          <Text style={lcss.otherText}>Create Account</Text>
        </View>
      </View>
    );
  }
}

const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#F26648',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    bottom: 60
  },
  fbButton: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  fbButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  otherText: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {
  return {
    gcss: state.gcss
  }
}

export default connect(mapStateToProps)(Login);
