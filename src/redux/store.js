"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import storage from "./customStorage";
import { cartReducer } from "./slice/cartSlice";

const authPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, cartReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persist = persistStore(store);
export const RootState = store.getState();
export const AppDispatch = store.dispatch;
