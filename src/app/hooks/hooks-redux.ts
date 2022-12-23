import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { StateCombinate, AppDispatch } from "../store/create-store";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<StateCombinate> = useSelector;
