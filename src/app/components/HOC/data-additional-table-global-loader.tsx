import React, { useEffect } from "react";
import { withLoading } from "./with-loading";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks-redux";
import { getStatusLoadingAdditionalData, fetchDataAdditionalTable } from "../../store/table-additional";

interface DataAdditionalTableGlobalLoaderProps {
	children: React.ReactNode | React.ReactChild;
};

const DataAdditionalTableGlobalLoader: React.FC<DataAdditionalTableGlobalLoaderProps> = ({ children }) => {
	const dispatch = useAppDispatch();

	const statusLoading = useAppSelector(getStatusLoadingAdditionalData());

	useEffect(() => {
		if (statusLoading) {
			dispatch(fetchDataAdditionalTable());
		}
	}, [statusLoading]);

	const ComponentWithLoading = withLoading(children, statusLoading);

	return (
		<ComponentWithLoading />
	);
};

export { DataAdditionalTableGlobalLoader };
