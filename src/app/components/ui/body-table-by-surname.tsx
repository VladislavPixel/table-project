import type React from "react";
import { useAppSelector } from "../../hooks/hooks-redux";
import { getDataUsers } from "../../store/users";
import type { IUserTable } from "../../interfaces";
import { ColumnDataTable } from "./column-data-table";

const BodyTableBySurname: React.FC = () => {
	const dataUsers = useAppSelector(getDataUsers());

	return (
		<div className="surname-table__container-data">
			{dataUsers.map((dataValue: IUserTable, index: number) => {
				const arrayForColumn: string[] = Object.keys(dataValue);

				arrayForColumn.push("download-metrix");

				return (
					<div key={index} className="surname-table__row-data">
						{arrayForColumn.map((keyValue: string, index: number) => {
							return (
								<ColumnDataTable key={index} maxIndex={arrayForColumn.length} index={index} value={dataValue[keyValue]} />
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export { BodyTableBySurname };
