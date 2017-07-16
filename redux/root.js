import { combineReducers } from 'redux';
import user from './user';
import dial from './dial';
import feed from './feed';
import chat from './chat';
import gcss from './gcss';

export default combineReducers({
  user, dial, feed, chat, gcss
});
