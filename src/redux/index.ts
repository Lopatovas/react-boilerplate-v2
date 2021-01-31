import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { homeReducer, HomeReducerState } from './home';

interface AppStore {
  home: HomeReducerState;
}

const rootReducer = combineReducers({ home: homeReducer });

const store = configureStore({
  reducer: rootReducer,
});

export { store, AppStore };
