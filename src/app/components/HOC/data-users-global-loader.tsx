import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
	getStatusLoaderForUsers,
	fetchDataUsers,
	getCurrentSearchForUsers
} from "../../store/users";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks-redux";
import { Spinner } from "../common/spinner";

interface DataUsersGlobalLoaderProps {
	children: React.ReactNode | React.ReactChild;
}

const DataUsersGlobalLoader: React.FC<DataUsersGlobalLoaderProps> = ({ children }) => {
	const statusLoader = useAppSelector(getStatusLoaderForUsers());

	const currentSearch = useAppSelector(getCurrentSearchForUsers());

	const dispatch = useAppDispatch();

	const params = useParams();

	useEffect(() => {
		if (statusLoader && params?.surName) {
			dispatch(fetchDataUsers(params.surName));
		}

		if (!statusLoader && params?.surName && params.surName !== currentSearch) {
			dispatch(fetchDataUsers(params.surName));
		}
	}, []);
	return (
		statusLoader ? <Spinner /> : <React.Fragment>{children}</React.Fragment>
	);
};

export { DataUsersGlobalLoader };
