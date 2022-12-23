import React, { useEffect, useState } from "react";
import { getDataUsers } from "../../../store/users";
import { useAppSelector } from "../../../hooks/hooks-redux";
import { LiteMessage } from "../../common/lite-message";

const TableBySurnamePage: React.FC = () => {
	const dataUsers = useAppSelector(getDataUsers());

	const [arrayKeys, setArrayKeys] = useState<string[]>([]);

	console.log(dataUsers, "ДАТА");
	useEffect(() => {
		if (dataUsers.length) {
			setArrayKeys((prevState) => Object.keys(dataUsers[0]));
		}
	}, []);
	return (
		<div className="block-content__table-by-surname surname-table">
			<h2 className="surname-table__title">Таблица - результат выборки по фамилии.</h2>
			{dataUsers.length === 0
				? <LiteMessage classesParent="surname-table" offer="Нажмите на герб, который находится в шапке, и попробуйте ввести другую фамилию. Второй вариант - это сразу же начать вводить новую фамилию в адресной строке после /table-surname/" title="По заданной фамилии пользователи не найдены." />
				: <div className="surname-table__block">
					<div className="surname-table__row-head">
						{arrayKeys.map((key: string, index: number) => {
							return (
								<div title={`Колонка отвечающая за: ${key}.`} key={index} className="surname-table__column-head">
									<p className="surname-table__title-head">{key}</p>
								</div>
							);
						})}
					</div>
				</div>
			}
		</div>
	);
};

export { TableBySurnamePage };
