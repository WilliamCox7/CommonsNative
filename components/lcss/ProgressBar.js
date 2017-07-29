import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

export const lcss = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    height: 110
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  backButton: {
    flex: 0.15,
    height: 50,
    marginTop: 30,
  },
  backArrow: {
    marginLeft: 20,
    width: 16,
    resizeMode: 'contain'
  },
  progressBar: {
    marginTop: 53,
    borderRadius: 4,
    height: 5,
    flex: 0.70,
    backgroundColor: '#E6E6E6',
    flexDirection: 'row'
  },
  progressBarSpace: {
    flex: 0.15
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    width: width * .7,
    alignSelf: 'center'
  },
  textView: {
    flex: 0.85,
    marginTop: 20
  },
  text: {
    color: '#F26648',
    fontSize: 20
  }
});
