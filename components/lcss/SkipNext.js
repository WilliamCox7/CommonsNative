import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export const lcss = StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    height: 40,
    left: width * 0.86,
    top: height - 40,
    width: width
  },
  redirectText: {
    color: '#F26648',
    fontSize: 18
  }
});
