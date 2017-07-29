import React from 'react';
import { View, TextInput } from 'react-native';
import { lcss } from './lcss/Activities';
import ProgressBar from './ProgressBar';
import SkipNext from './SkipNext';

class Activities extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <ProgressBar redirect={'Attributes'} flex={0.75}
          text={'what are you up to this week?'} navigation={this.props.navigation} />
        <TextInput style={lcss.inputBox} value={this.state.text}
          onChangeText={(text) => this.setState({text})} multiline
          autoFocus underlineColorAndroid="transparent" />
        <SkipNext next redirect={"Upload"} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Activities;
