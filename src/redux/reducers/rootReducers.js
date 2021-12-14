import { combineReducers } from 'redux';
import adminsReducer from '../Admins/reducer';
import applicationsReducer from '../Applications/reducer';
import sessionsReducer from '../Sessions/reducer';
import positionsReducer from '../Positions/reducer';
import profilesReducer from '../Profiles/reducer';

const rootReducer = combineReducers({
  admins: adminsReducer,
  applications: applicationsReducer,
  sessions: sessionsReducer,
  positions: positionsReducer,
  profiles: profilesReducer
});

export default rootReducer;
