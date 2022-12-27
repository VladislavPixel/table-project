import type React from "react";
import { getDataUsers } from "../../../store/users";
import { useAppSelector } from "../../../hooks/hooks-redux";
import { LiteMessage } from "../../common/lite-message";
import { HeaderTableBySurname } from "../../ui/header-table-by-surname";
import { BodyTableBySurname } from "../../ui/body-table-by-surname";

const TableBySurnamePage: React.FC = () => {
	const dataUsers = useAppSelector(getDataUsers());

	return (
		<div className="block-content__table-by-surname surname-table">
			<h2 className="surname-table__title">Таблица - результат выборки по фамилии.</h2>
			{dataUsers.length === 0
				? <LiteMessage classesParent="surname-table" offer="Нажмите на герб, который находится в шапке, и попробуйте ввести другую фамилию. Второй вариант - это сразу же начать вводить новую фамилию в адресной строке после /table-surname/" title="По заданной фамилии пользователи не найдены." />
				: <div className="surname-table__block">
					<HeaderTableBySurname />
					<BodyTableBySurname />
				</div>
			}
		</div>
	);
};

export { TableBySurnamePage };
