import {combineReducers} from 'redux';
import productReducer from './product/slice';

export interface RootState {
  loading: ReturnType<typeof productReducer>;
}

const rootReducer = combineReducers({
  products : productReducer
});

export default rootReducer;
