import type React from "react";
import { TableAdditionalPage } from "../components/pages/table-additional-page";
import { DataAdditionalTableGlobalLoader } from "../components/hoc/data-additional-table-global-loader";

const TableAdditional: React.FC = () => {
	return (
		<DataAdditionalTableGlobalLoader>
			<TableAdditionalPage />
		</DataAdditionalTableGlobalLoader>
	);
};

export { TableAdditional };
