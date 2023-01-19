import type React from "react";
import { useAppSelector } from "../../../hooks/hooks-redux";
import type { IDataAllPage } from "../../../interfaces";
import { ItemAdditionalTable } from "../../ui/item-additional-table";
import { RedirectToPage } from "../../common/redirect-to-page";
import { LiteMessage } from "../../common/lite-message";

import {
	getDataForAdditionalTable,
	getErrorAdditionalTable
} from "../../../store/table-additional";

const TableAdditionalPage: React.FC = () => {
	const dataAdditionalTable = useAppSelector(getDataForAdditionalTable());

	const errorAdditionalTable = useAppSelector(getErrorAdditionalTable());

	const isRedirect = !errorAdditionalTable && dataAdditionalTable.length !== 0;

	const isEmptyData = dataAdditionalTable.length === 0 && !errorAdditionalTable;

	return (
		<div className="block-content__table-additional additional-table">
			{isRedirect && <RedirectToPage classesParent="additional-table" title="Перейти на стартовую страницу" path="/" />}
			<h2 className="additional-table__title">Добавочная таблица</h2>
			{
				isEmptyData
				? <LiteMessage classesParent="additional-table" offer="Обратитесь к разработчикам, чтобы узнать есть данные или нет." title="Добавочная таблица на данный момент пустая." pathLink="/" />
				: errorAdditionalTable
				? <LiteMessage classesParent="additional-table" offer="Сообщите об этом разработчикам или попробуйте воспользоваться сервисом позже." title="Что-то пошло не так, при запросе произошла ошибка." pathLink="/" />
				: (
					<div className="additional-table__container">
						{dataAdditionalTable.map((item: IDataAllPage, index: number) => <ItemAdditionalTable key={index} data={item} i={index} />)}
					</div>
				)
			}
		</div>
	);
};

export { TableAdditionalPage };
