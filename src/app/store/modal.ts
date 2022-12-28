import { createSlice } from "@reduxjs/toolkit";
import type { IInitialStateModal } from "../interfaces";
import type { StateCombinate, AppDispatch } from "./create-store";

const initialState: IInitialStateModal = {
	isModal: false
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		modalReceived(state) {
			state.isModal = !state.isModal;
		}
	}
});

const { actions, reducer: modalReducer } = modalSlice;

const { modalReceived } = actions;

// ACTIONS
export function setStateModal() {
	return async(dispatch: AppDispatch) => {
		dispatch(modalReceived());
	};
}

// SELECTORS
export const getStateModal = () => {
	return (state: StateCombinate): boolean => {
		return state.modal.isModal;
	};
};

export { modalReducer };
