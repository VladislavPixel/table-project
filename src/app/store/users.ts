import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StateCombinate, AppDispatch } from "./create-store";
import type { IInitialStateUsers, IUserTable } from "../interfaces";

import { fakeAPI } from "../fake-api";

const initialState: IInitialStateUsers = {
	isLoadingUsers: true,
	dataUsers: [],
	errorUsers: null,
	currentSearch: ""
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		usersRequested(state) {
			state.errorUsers = null;
			state.dataUsers = [];
			state.isLoadingUsers = true;
		},
		usersReceived(state, action: PayloadAction<{ data: IUserTable[]; searchTxt: string }>) {
			state.dataUsers = action.payload.data;
			state.currentSearch = action.payload.searchTxt;
			state.isLoadingUsers = false;
		},
		usersRequestField(state, action: PayloadAction<string>) {
			state.errorUsers = action.payload;
			state.isLoadingUsers = false;
		}
	}
});

const { actions, reducer: usersReducer } = usersSlice;

const {
	usersRequested,
	usersReceived,
	usersRequestField
} = actions;

// ACTIONS
export function fetchDataUsers(surnameText: string) {
	return async(dispatch: AppDispatch): Promise<void> => {
		dispatch(usersRequested());

		try {
			const valueData = await fakeAPI.getDataUsersBySurname(surnameText);

			dispatch(usersReceived({ data: valueData, searchTxt: surnameText }));
		} catch (err: any) {
			const { message } = err;

			dispatch(usersRequestField(message));
		}
	};
};

// SELECTORS
export const getDataUsers = () => {
	return (state: StateCombinate) => {
		return state.users.dataUsers;
	};
};

export const getStatusLoaderForUsers = () => {
	return (state: StateCombinate) => {
		return state.users.isLoadingUsers;
	};
};

export const getErrorForUsers = () => {
	return (state: StateCombinate) => {
		return state.users.errorUsers;
	};
};

export const getCurrentSearchForUsers = () => {
	return (state: StateCombinate) => {
		return state.users.currentSearch;
	};
};

export { usersReducer };
