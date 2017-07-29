import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

export const lcss = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    height: 38,
    marginBottom: 10
  },
  resultText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#4D4D4D',
    alignSelf: 'center'
  },
  resultLetter: {
    marginLeft: 10,
    marginRight: 10,
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: '#F26648',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3
  },
  letter: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  }
});
