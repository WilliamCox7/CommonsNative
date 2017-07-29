import React from 'react';
import { View, TextInput } from 'react-native';
import { lcss } from './lcss/DialSearch';
import SearchResult from './SearchResult';

class DialSearch extends React.Component {

  static navigationOptions = { header: null }

  constructor() {
    super();
    this.state = {
      text: '',
      test: [
        'test the stuff',
        'food is something',
        'so very good',
        'hangliding'
      ]
    };
  }

  render() {

    var results = this.state.test.map((result, i) => {
      return <SearchResult result={result} key={i} />;
    });

    return (
      <View style={lcss.viewContainer}>
        <View style={lcss.inputContainer}>
          <View style={lcss.inputSpace}></View>
          <TextInput style={lcss.inputBox} value={this.state.text}
            onChangeText={(text) => this.setState({text})}
            placeholder={this.props.placeholderText} placeholderTextColor="#E6E6E6"
            underlineColorAndroid="transparent" />
          <View style={lcss.inputSpace}></View>
        </View>
        <View style={lcss.resultsContainer}>
          {results}
        </View>
      </View>
    );
  }
}



export default DialSearch;
