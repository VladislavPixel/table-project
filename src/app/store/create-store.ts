import {
	configureStore,
	combineReducers
} from "@reduxjs/toolkit";

import { usersReducer } from "./users";
import { modalReducer } from "./modal";

const rootReducer = combineReducers({
	users: usersReducer,
	modal: modalReducer
});

const resultConfigureStore = configureStore({
	reducer: rootReducer
});

type ConfigureStoreType = typeof resultConfigureStore;

type RootReducerFN = typeof rootReducer;

type InferencerForState<T extends (...args: any[]) => unknown> = T extends (...args: any[]) => infer H ? H : unknown;

export type StateCombinate = InferencerForState<RootReducerFN>;

export type AppDispatch = typeof resultConfigureStore.dispatch;

export function createStore(): ConfigureStoreType {
	return resultConfigureStore;
};
