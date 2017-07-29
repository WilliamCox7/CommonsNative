import { StyleSheet, Dimensions } from 'react-native';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export const lcss = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: height
  },
  pictureContainer: {
    marginTop: 90,
    flexDirection: 'row',
    width: width * 0.85,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  backgroundContainer: {
    marginTop: 40,
    flexDirection: 'row',
    width: width * 0.85,
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  uploadBlock: {
    width: width * 0.40
  },
  uploadText: {
    color: '#F26648',
    fontSize: 16,
    marginBottom: 15
  },
  uploadImage: {
    borderRadius: 6
  }
});
