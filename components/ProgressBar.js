import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { lcss } from './lcss/ProgressBar';

class ProgressBar extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.navigation.navigate(this.props.redirect);
  }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <View style={lcss.barContainer}>
          <TouchableOpacity onPress={this.redirect} style={lcss.backButton}>
            <Image source={require('../src/back-arrow.png')} style={lcss.backArrow} />
          </TouchableOpacity>
          <View style={lcss.progressBar}>
            <View style={{
              backgroundColor: '#F26648',
              borderRadius: 4,
              height: 5,
              flex: this.props.flex
            }}></View>
            <View style={{flex: 1-this.props.flex}}></View>
          </View>
          <View style={lcss.progressBarSpace}></View>
        </View>
        <View style={lcss.textContainer}>
          <View style={lcss.textView}>
            <Text style={lcss.text}>{this.props.text}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ProgressBar;
