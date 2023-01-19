import type React from "react";
import { useAppSelector } from "../../../hooks/hooks-redux";
import { LiteMessage } from "../../common/lite-message";
import { HeaderTableBySurname } from "../../ui/header-table-by-surname";
import { BodyTableBySurname } from "../../ui/body-table-by-surname";
import { RedirectToPage } from "../../common/redirect-to-page";

import {
	getDataUsers,
	getErrorForUsers
} from "../../../store/users";

const TableBySurnamePage: React.FC = () => {
	const dataUsers = useAppSelector(getDataUsers());

	const errorUsers = useAppSelector(getErrorForUsers());

	const isEmptyData = dataUsers.length === 0 && !errorUsers;

	const isRedirect = !errorUsers && dataUsers.length !== 0;

	return (
		<div className="block-content__table-by-surname surname-table">
			{isRedirect && <RedirectToPage classesParent="surname-table" title="Вернуться на стартовую страницу" path="/" />}
			<h2 className="surname-table__title">Таблица - результат выборки по фамилии</h2>
			{
				isEmptyData
				? <LiteMessage classesParent="surname-table" offer="Нажмите на герб, который находится в шапке, и попробуйте ввести другую фамилию. Или воспользуйтесь кнопкой перехода ниже." title="По заданной фамилии пользователи не найдены." pathLink="/" />
				: errorUsers
				? <LiteMessage classesParent="surname-table" offer="Сообщите об этом разработчикам или попробуйте воспользоваться сервисом позже." title="Что-то пошло не так, при запросе произошла ошибка." pathLink="/" />
				: (
					<div className="surname-table__block">
						<HeaderTableBySurname />
						<BodyTableBySurname />
					</div>
				)
			}
		</div>
	);
};

export { TableBySurnamePage };
