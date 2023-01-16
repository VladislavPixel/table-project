import type React from "react";
import { TableBySurnamePage } from "../components/pages/table-by-surname-page";
import { DataUsersGlobalLoader } from "../components/hoc/data-users-global-loader";

const TableBySurname: React.FC = () => {
	return (
		<DataUsersGlobalLoader>
			<TableBySurnamePage />
		</DataUsersGlobalLoader>
	);
};

export { TableBySurname };
