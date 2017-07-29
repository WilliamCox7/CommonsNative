import { StyleSheet } from 'react-native';

export const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#F26648',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    bottom: 60
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  createText: {
    color: 'white',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
