import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { lcss } from './lcss/Attributes';
import ProgressBar from './ProgressBar';
import EditDial from './EditDial';
import SkipNext from './SkipNext';

class Attributes extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <KeyboardAvoidingView style={lcss.viewContainer} behavior="position"
        keyboardVerticalOffset={-90}>
        <ProgressBar redirect={'Hobbies'} flex={0.5}
          text={'what defines you?'} navigation={this.props.navigation} />
        <EditDial placeholderText="my attributes are..." />
        <SkipNext next redirect={"Activities"} navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

export default Attributes;
