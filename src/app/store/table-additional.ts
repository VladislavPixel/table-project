import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StateCombinate, AppDispatch } from "./create-store";
import type { IInitialStateDataAdditionalTable, IDataAllPage } from "../interfaces";

import { fakeAPI } from "../fake-api";

const initialState: IInitialStateDataAdditionalTable = {
	isLoadingAdditionalData: true,
	dataForAdditionalTable: [],
	errorAdditionalTable: null
};

const additionalTableSlice = createSlice({
	name: "additionalTable",
	initialState,
	reducers: {
		additionalTableRequested(state) {
			state.isLoadingAdditionalData = true;
			state.dataForAdditionalTable = [];
			state.errorAdditionalTable = null;
		},
		additionalTableReceived(state, action: PayloadAction<IDataAllPage[]>) {
			state.dataForAdditionalTable = action.payload;
			state.isLoadingAdditionalData = false;
		},
		additionalTableRequestField(state, action: PayloadAction<string>) {
			state.errorAdditionalTable = action.payload;
			state.isLoadingAdditionalData = false;
		}
	}
});

const { actions, reducer: additionalTableReducer } = additionalTableSlice;

const {
	additionalTableRequested,
	additionalTableReceived,
	additionalTableRequestField
} = actions;

// ACTIONS
export function fetchDataAdditionalTable() {
	return async(dispatch: AppDispatch): Promise<void> => {
		dispatch(additionalTableRequested());

		try {
			console.log("Запрос в additionalTable Store на получение данных для дополнительной таблицы.");

			const valueData = await fakeAPI.getDataUsersForAllPage();

			dispatch(additionalTableReceived(valueData));
		} catch (err: any) {
			const { message } = err;

			dispatch(additionalTableRequestField(message));
		}
	};
};

// SELECTORS
export const getStatusLoadingAdditionalData = () => {
	return (state: StateCombinate): boolean => {
		return state.additionalTable.isLoadingAdditionalData;
	};
};

export const getErrorAdditionalTable = () => {
	return (state: StateCombinate): null | string => {
		return state.additionalTable.errorAdditionalTable;
	};
};

export const getDataForAdditionalTable = () => {
	return (state: StateCombinate): IDataAllPage[] => {
		return state.additionalTable.dataForAdditionalTable;
	};
};

export { additionalTableReducer };
