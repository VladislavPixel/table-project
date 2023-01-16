import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StateCombinate, AppDispatch } from "./create-store";
import type { IInitialStateUsers, IUserTable } from "../interfaces";

import { fakeAPI } from "../fake-api";

const initialState: IInitialStateUsers = {
	isLoadingUsers: true,
	dataUsers: [],
	errorUsers: null,
	currentSearch: "",
	targetIdUser: null,
	targetDataUser: null
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		usersRequested(state) {
			state.errorUsers = null;
			state.dataUsers = [];
			state.isLoadingUsers = true;
			state.currentSearch = "";
			state.targetIdUser = null;
			state.targetDataUser = null;
		},
		usersReceived(state, action: PayloadAction<{ data: IUserTable[]; searchTxt: string }>) {
			state.dataUsers = action.payload.data;
			state.currentSearch = action.payload.searchTxt;
			state.isLoadingUsers = false;
		},
		usersRequestField(state, action: PayloadAction<string>) {
			state.errorUsers = action.payload;
			state.isLoadingUsers = false;
		},
		targetUserReceived(state, action: PayloadAction<{ id: string; data: IUserTable }>) {
			state.targetIdUser = action.payload.id;
			state.targetDataUser = action.payload.data;
		}
	}
});

const { actions, reducer: usersReducer } = usersSlice;

const {
	usersRequested,
	usersReceived,
	usersRequestField,
	targetUserReceived
} = actions;

// ACTIONS
export function fetchDataUsers(surnameText: string) {
	return async(dispatch: AppDispatch): Promise<void> => {
		dispatch(usersRequested());

		try {
			console.log("Запрос в users Store на получение данных конкретного пользователя.");
			const valueData = await fakeAPI.getDataUsersBySurname(surnameText);

			dispatch(usersReceived({ data: valueData, searchTxt: surnameText }));
		} catch (err: any) {
			const { message } = err;

			dispatch(usersRequestField(message));
		}
	};
};

export function setDataUser(id: string, data: IUserTable) {
	return async(dispatch: AppDispatch, getStore: () => StateCombinate): Promise<void> => {
		const oldId = getStore().users.targetIdUser;

		if (oldId !== id) {
			dispatch(targetUserReceived({ id, data }));
		}
	};
};

// SELECTORS
export const getDataUsers = () => {
	return (state: StateCombinate): IUserTable[] => {
		return state.users.dataUsers;
	};
};

export const getStatusLoaderForUsers = () => {
	return (state: StateCombinate): boolean => {
		return state.users.isLoadingUsers;
	};
};

export const getErrorForUsers = () => {
	return (state: StateCombinate): string | null => {
		return state.users.errorUsers;
	};
};

export const getCurrentSearchForUsers = () => {
	return (state: StateCombinate): string => {
		return state.users.currentSearch;
	};
};

export const getIdForTargetUser = () => {
	return (state: StateCombinate): string | null => {
		return state.users.targetIdUser;
	};
};

export const getDataForTargetUser = () => {
	return (state: StateCombinate): IUserTable | null => {
		return state.users.targetDataUser;
	};
};

export { usersReducer };
