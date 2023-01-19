import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RedirectToPage } from "../../common/redirect-to-page";

import {
	FormComponent,
	TextField
} from "../../common/form";

const SearchPage: React.FC = () => {
	const navigate = useNavigate();

	const [data] = useState<Record<string, string>>({
		surName: ""
	});

	function handlerSubmitForm(newData: Record<string, unknown>): void {
		if (newData.surName === undefined || typeof newData.surName !== "string") {
			throw new Error("Данные возвращаемые из формы должны иметь ключ surName, с каким то строковым значением.");
		}

		navigate(`/table-surname/${newData.surName}`);
	};

	const validatorConfig = {
		surName: { isRequired: { message: `Поле "Фамилия" обязательно для заполнения.` } }
	};

	return (
		<div className="block-content__search-container container-search _container">
			<RedirectToPage classesParent="container-search" title="Перейти на добавочную страницу" path="/table-additional" />
			<div className="container-search__block">
				<FormComponent titleForForm="Форма, для поиска таблицы по фамилии." onSubmit={handlerSubmitForm} defaultData={data} config={validatorConfig} classesParent="container-search">
					<TextField name="surName" label="Фамилия:" placeholder="начните поиск по фамилии" type="text" />
					<button title="Нажмите, чтобы сделать выборку по введенной фамилии." className="container-search__btn-sub blue-btn" type="submit">Сделать выборку</button>
				</FormComponent>
			</div>
		</div>
	);
};

export { SearchPage };
