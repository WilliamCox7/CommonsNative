import { StyleSheet, Dimensions } from 'react-native';

var height = Dimensions.get('window').height;

export const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: height
  }
});
