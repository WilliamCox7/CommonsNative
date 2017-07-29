import { StyleSheet } from 'react-native';

export const lcss = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  viewContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 126
  },
  welcomeText: {
    color: 'white',
    fontSize: 38,
    marginBottom: 28,
    zIndex: 2
  },
  introText: {
    textAlign: 'center',
    width: 200,
    color: 'white',
    marginBottom: 80,
    fontWeight: 'bold',
    fontSize: 16,
    zIndex: 2
  },
  button: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 50,
    backgroundColor: 'white',
    zIndex: 2
  },
  buttonText: {
    color: '#F26648',
    fontSize: 20,
    fontWeight: 'bold'
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    backgroundColor: '#F26648',
    opacity: 0.3
  }
});
