import React, { useState } from "react";

import { FormComponent, TextField } from "../../common/form";

const SearchPage: React.FC = () => {
	const [data] = useState<Record<string, string>>({
		surName: ""
	});

	function handlerSubmitForm(newData: Record<string, unknown>): void {
		console.log("Отправка данных: ", newData);
	};

	const validatorConfig = {
		surName: { isRequired: { message: `Поле "Фамилия" обязательно для заполнения.` } }
	};

	return (
		<div className="block-content__search-container container-search _container">
			<div className="container-search__block">
				<FormComponent titleForForm="Форма, для поиска таблицы по фамилии." onSubmit={handlerSubmitForm} defaultData={data} config={validatorConfig} classesParent="container-search">
					<TextField name="surName" label="Фамилия:" placeholder="начните поиск по фамилии" type="text" />
					<button title="Нажмите, чтобы сделать выборку по введенной фамилии." className="container-search__btn-sub" type="submit">Сделать выборку</button>
				</FormComponent>
			</div>
		</div>
	);
};

export { SearchPage };
