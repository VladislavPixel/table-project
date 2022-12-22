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
