export interface IConfigForValidator {
	readonly [key: string]: {
		readonly [key: string]: {
			readonly [key: string]: string;
		};
	};
};

export interface IValidator {
	worker(method: string, dataValue: string, objectValidate: Record<string, string>): string | undefined;
	validate(data: Record<string, string>, config: IConfigForValidator): Record<string, string>;
};

export interface IPropsHandlerChange {
	name: string;
	value: string;
};

export interface IUserTable {
	"MAC - адрес": string;
	"Office": string;
	"Windows": string;
	"attachment": string;
	"id": string;
	"timestamp": string;
	"Адрес, кабинет": string;
	"Версия kaspersky": string;
	"Должность": string;
	"ЖМД (марка, модель, s/n / инвентарный номер)": string;
	"Иные подключенные устройства": string;
	"Камера (марка, модель, s/n /инвентарный номер)": string;
	"Клавиатура (марка, модель, s/n / инвентарный номер)": string;
	"Колонки (марка, модель, s/n / инвентарный номер)": string;
	"Монитор (марка, модель, s/n / инвентарный номер)": string;
	"Мышь (марка, модель, s/n / инвентарный номер)": string;
	"Наушники (марка, модель, s/n / инвентарный номер)": string;
	"Полное наименование подразделения": string;
	"Принтер/МФУ/Скан. (марка, модель, s/n / инвентарный номер)": string;
	"Проектор (марка, модель, s/n / инвентарный номер)": string;
	"Сервисы ИСОД": string;
	"Системный блок (марка, модель, s/n /инвентарный номер)": string;
	"ФИО": string;
	"ФИО инженера устанвливающего ПО": string;
	"кабинет": string;
	"установлен ДСТ (1-да/0-нет)": string;
	"№ кабинета": string;
};
