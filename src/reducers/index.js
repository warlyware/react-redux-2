import { combineReducers } from 'redux';

import ActiveGameReducer from'./active-game';
import GamesReducer from './games'

const rootReducer = combineReducers({
  games: GamesReducer,
  activeGame: ActiveGameReducer
});

export default rootReducer;
