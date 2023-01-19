import type React from "react";
import type { IDataAllPage } from "../../interfaces";
import { splitCreatedAt } from "../../utils/split-created-at";
import { splitId } from "../../utils/split-id";

interface IItemAdditionalTableProps {
	data: IDataAllPage;
	i: number;
};

const ItemAdditionalTable: React.FC<IItemAdditionalTableProps> = ({ data, i }) => {
	return (
		<div className={`additional-table__item-row${i % 2 === 0 ? " even" : ""}`}>
			{Object.keys(data).map((key: string, index: number) => {
				const correctData = data as Record<string, string> & IDataAllPage;

				const correctValue = key === "createdAt"
					? splitCreatedAt(correctData[key])
					: key === "id"
					? splitId(correctData[key])
					: correctData[key];

				return (
					<div key={index} className="additional-table__column-item">
						<div className="additional-table__text">{correctValue}</div>
					</div>
				);
			})}
		</div>
	);
};

export { ItemAdditionalTable };
