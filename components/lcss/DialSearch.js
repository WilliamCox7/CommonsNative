import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

export const lcss = StyleSheet.create({
  viewContainer: {
    alignItems: 'flex-start',
    width: width,
    flex: 1
  },
  inputContainer: {
    marginTop: 20,
    flex: 1,
    height: 45,
    maxHeight: 45,
    minHeight: 45,
    flexDirection: 'row'
  },
  inputSpace: {
    flex: 0.1
  },
  inputBox: {
    flex: 0.8,
    height: 45,
    paddingLeft: 25,
    borderRadius: 50,
    borderColor: '#E6E6E6',
    borderWidth: 2,
    fontSize: 16,
    textAlign: 'left',
    color: '#4D4D4D'
  },
  resultsContainer: {
    marginLeft: width * 0.15,
    marginRight: width * 0.15,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width - width * 0.3
  }
});
