import React from 'react';
import { View, Text } from 'react-native';
import { lcss } from './lcss/SearchResult';

class SearchResult extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
  }

  render() {
    return (
      <View style={lcss.viewContainer}>
        <Text style={lcss.resultText}>{this.props.result}</Text>
        <View style={lcss.resultLetter}>
          <Text style={lcss.letter}>
            {this.props.result[0].toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}



export default SearchResult;
