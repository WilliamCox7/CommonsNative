import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { lcss } from './lcss/Hobbies';
import ProgressBar from './ProgressBar';
import EditDial from './EditDial';
import SkipNext from './SkipNext';

class Hobbies extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <KeyboardAvoidingView style={lcss.viewContainer} behavior="position"
        keyboardVerticalOffset={-90}>
        <ProgressBar redirect={'Welcome'} flex={0.25}
          text={'choose five hobbies'} navigation={this.props.navigation} />
        <EditDial placeholderText="my hobbies are..." />
        <SkipNext next redirect={"Attributes"} navigation={this.props.navigation} />
      </KeyboardAvoidingView>
    );
  }
}

export default Hobbies;
