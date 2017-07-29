import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import Welcome from './components/Welcome';
import Hobbies from './components/Hobbies';
import Attributes from './components/Attributes';
import Activities from './components/Activities';
import Upload from './components/Upload';

export const Routes = StackNavigator({
  Login: {
    screen: Login
  },
  Welcome: {
    screen: Welcome
  },
  Hobbies: {
    screen: Hobbies
  },
  Attributes: {
    screen: Attributes
  },
  Activities: {
    screen: Activities
  },
  Upload: {
    screen: Upload
  }
}, {
  headerMode: 'screen'
});
