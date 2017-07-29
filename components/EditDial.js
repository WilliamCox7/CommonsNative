import React from 'react';
import { View, Text } from 'react-native';
import { lcss } from './lcss/EditDial';
import DialSearch from './DialSearch';

class EditDial extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
  }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <View style={lcss.dialContainer}>
          <View style={lcss.spoke1}>
            <View style={lcss.circle1}>
              <Text style={lcss.blankText}>+</Text>
            </View>
          </View>
          <View style={lcss.spoke2}>
            <View style={lcss.circle2}>
              <Text style={lcss.blankText}>+</Text>
            </View>
          </View>
          <View style={lcss.spoke3}>
            <View style={lcss.circle3}>
              <Text style={lcss.blankText}>+</Text>
            </View>
          </View>
          <View style={lcss.spoke4}>
            <View style={lcss.circle4}>
              <Text style={lcss.blankText}>+</Text>
            </View>
          </View>
          <View style={lcss.spoke5}>
            <View style={lcss.circle5}>
              <Text style={lcss.blankText}>+</Text>
            </View>
          </View>
        </View>
        <DialSearch placeholderText={this.props.placeholderText} />
      </View>
    );
  }
}

export default EditDial;
