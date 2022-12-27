import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/hooks-redux";
import { getDataUsers } from "../../store/users";
import DownloadIcon from "../../images/icons/download.svg";

const HeaderTableBySurname: React.FC = () => {
	const dataUsers = useAppSelector(getDataUsers());

	const [arrayKeys, setArrayKeys] = useState<string[]>([]);

	useEffect(() => {
		if (dataUsers.length) {
			setArrayKeys((prevState) => {
				const array = Object.keys(dataUsers[0]);

				array.push("Загрузить");

				return array;
			});
		}
	}, []);
	return (
		<div className="surname-table__row-head">
			{arrayKeys.map((key: string, index: number) => {
				return (
					<div title={`Колонка отвечающая за: ${key}.`} key={index} className={"surname-table__column-head" + (index === arrayKeys.length - 1 ? " surname-table__column-head_last" : "")}>
						{index === arrayKeys.length - 1 &&
							<img src={DownloadIcon} alt="Иконка-скачать." />
						}
						<p className="surname-table__title-head">{key}</p>
					</div>
				);
			})}
		</div>
	);
};

export { HeaderTableBySurname };
