import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { lcss } from './lcss/SkipNext';

class SkipNext extends React.Component {

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
        {this.props.next ? (
          <TouchableOpacity onPress={this.redirect}>
            <Text style={lcss.redirectText}>
              next
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.redirect}>
            <Text style={lcss.redirectText}>
              skip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}



export default SkipNext;
