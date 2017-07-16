import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import store from './redux/store';
import Login from './components/Login';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      session: undefined
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('userSession', (err, data) => {
      this.setState({session: JSON.parse(data) });
    });
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.session ? (
          <View style={lcss.container}>
            <Text>Test</Text>
          </View>
        ) : (
          <Login />
        )}
      </Provider>
    );
  }
}

const lcss = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
