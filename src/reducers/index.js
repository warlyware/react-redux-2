import { combineReducers } from 'redux';

import GamesReducer from './games'

const rootReducer = combineReducers({
  games: GamesReducer
});

export default rootReducer;
