import { StyleSheet } from 'react-native';

export const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center'
  },
  dialContainer: {
    marginTop: 30,
    width: 160,
    height: 160,
    alignItems: 'center'
  },
  spoke1: {
    position: 'absolute',
    width: 45,
    height: 160,
    transform: [{rotate: '0deg'}]
  },
  spoke2: {
    position: 'absolute',
    width: 45,
    height: 160,
    transform: [{rotate: '72deg'}]
  },
  spoke3: {
    position: 'absolute',
    width: 45,
    height: 160,
    transform: [{rotate: '144deg'}]
  },
  spoke4: {
    position: 'absolute',
    width: 45,
    height: 160,
    transform: [{rotate: '216deg'}]
  },
  spoke5: {
    position: 'absolute',
    width: 45,
    height: 160,
    transform: [{rotate: '288deg'}]
  },
  circle1: {
    width: 45,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '0deg'}]
  },
  circle2: {
    width: 45,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-72deg'}]
  },
  circle3: {
    width: 45,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-144deg'}]
  },
  circle4: {
    width: 45,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-216deg'}]
  },
  circle5: {
    width: 45,
    height: 45,
    backgroundColor: '#E6E6E6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-288deg'}]
  },
  blankText: {
    color: '#4D4D4D',
    fontSize: 16
  }
});
