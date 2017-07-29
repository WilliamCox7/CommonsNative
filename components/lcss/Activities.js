import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: height
  },
  inputBox: {
    alignSelf: 'center',
    width: width * 0.7,
    height: 200,
    textAlignVertical: 'top',
    color: '#808080',
    fontSize: 18
  }
});
