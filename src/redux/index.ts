import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { landingReducer } from "./landing";

interface AppStore {
    landing: {
        value: number;
    }
}

const rootReducer = combineReducers({ landing: landingReducer });

const store = configureStore({
  reducer: rootReducer,
});

export { store, AppStore };
