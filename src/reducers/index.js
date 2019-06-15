import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {user} from './user';

export default function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    user,
  });
}
