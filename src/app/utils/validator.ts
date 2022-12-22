import type {
	IValidator,
	IConfigForValidator
} from "../interfaces";

class Validator implements IValidator {
	#errorList: Record<string, string>;

	constructor() {
		this.#errorList = {};
	}

	worker(method: string, dataValue: string, objectValidate: Record<string, string>): string | undefined {
		let statusValidate: boolean | undefined;

		switch (method) {
			case "isRequired":
				statusValidate = dataValue.trim() === "";
				break;
			default:
				break;
		}

		if (statusValidate) {
			return objectValidate.message;
		}
	};

	validate(data: Record<string, string>, config: IConfigForValidator): Record<string, string> {
		this.#errorList = {};

		for (const key in data) {
			for (const validateMethod in config[key]) {
				const error: string | undefined = this.worker(validateMethod, data[key], config[key][validateMethod]);

				if (error && !this.#errorList[key]) {
					this.#errorList[key] = error;
				}
			}
		}

		return this.#errorList;
	};
};

const validator: Validator = new Validator();

export { validator };
