import React from 'react';
import { View, TextInput, Image, Text } from 'react-native';
import { lcss } from './lcss/Upload';
import ProgressBar from './ProgressBar';
import SkipNext from './SkipNext';

class Upload extends React.Component {

  static navigationOptions = { header: null }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <ProgressBar redirect={'Activities'} flex={1}
          text={'make or upload your profile video and picture'}
          navigation={this.props.navigation} />
        <View style={lcss.pictureContainer}>
          <Image source={require('../src/profile-plus.png')} />
          <View style={lcss.uploadBlock}>
            <Text style={lcss.uploadText}>
              upload{'\n'}
              profile picture
            </Text>
            <Image style={lcss.uploadImage}
              source={require('../src/upload-block.png')} />
          </View>
        </View>
        <View style={lcss.backgroundContainer}>
          <Image source={require('../src/background-plus.png')} />
          <View style={lcss.uploadBlock}>
            <Text style={lcss.uploadText}>
              upload{'\n'}
              background media
            </Text>
            <Image style={lcss.uploadImage}
              source={require('../src/upload-block.png')} />
          </View>
        </View>
        <SkipNext next redirect={"Feed"} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Upload;
