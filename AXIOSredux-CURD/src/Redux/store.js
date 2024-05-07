import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import logger from "redux-logger"; // Import redux-logger
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ user: Reducer });

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger)
});

export default store;
