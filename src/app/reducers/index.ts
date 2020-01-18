import { combineReducers } from 'redux';
import { RootState } from './state';
import { authReducer } from './auth';
import { validationReducer } from './validation';
import { advertisersReducer } from 'app/reducers/advertisers';

export { RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  auth: authReducer as any,
  validation: validationReducer as any,
  advertisers: advertisersReducer as any,
});
