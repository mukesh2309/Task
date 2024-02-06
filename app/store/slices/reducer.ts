import {combineReducers} from 'redux';
import searchReducer from './test/slice';

export interface RootState {
  loading: ReturnType<typeof searchReducer>;
}

const rootReducer = combineReducers({
  search : searchReducer
});

export default rootReducer;
