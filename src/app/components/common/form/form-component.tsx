import React, { FormEvent, useState, useEffect } from "react";

import type {
	IConfigForValidator,
	IPropsHandlerChange
} from "../../../interfaces";

import { validator } from "../../../utils/validator";

interface FormComponentAdditionalProps {
	classesParent: string;
	children: React.ReactNode;
	config: IConfigForValidator;
	titleForForm: string;
	onSubmit(dataValue: any): void;
};

type TypePropsForm<T = unknown> = { defaultData: Record<string, string | Record<string, T>> } & FormComponentAdditionalProps;

function FormComponent<T>({ defaultData, onSubmit, config, children, classesParent, titleForForm }: TypePropsForm<T>): any {
	const [data, setData] = useState<Record<string, string | Record<string, T | {}>>>(defaultData || {});

	const [errors, setErrors] = useState<Record<string, string>>({});

	const validation = (dataTarget: Record<string, string | Record<string, T | {}>>): boolean => {
		const errorSet = validator.validate(dataTarget, config);

		setErrors(errorSet);

		return Object.keys(errorSet).length === 0;
	};

	const isDisabledBtn: boolean = !(Object.keys(errors).length === 0);

	const newChildren: React.ReactNode = React.Children.map(children, child => {
		if (typeof child !== "undefined" && child !== null) {
			let newConfigChild: undefined | Record<string, any>;

			if (React.isValidElement(child)) {
				if (typeof child.type === "function") {
					newConfigChild = {
						...child.props,
						value: data[child.props.name],
						onChange: handlerChange,
						error: (errors[child.props.name] !== undefined ? errors[child.props.name] : child.props.error)
					};
				}

				if (child.type === "button") {
					if (child.props.type === undefined || child.props.type === "submit") {
						newConfigChild = {
							...child.props,
							className: String(child.props.className) + (isDisabledBtn ? " no-active" : ""),
							disabled: isDisabledBtn
						};
					}
				}

				return React.cloneElement(child, newConfigChild);
			}
		}
	});

	function handlerSubmit(event: FormEvent): void {
		event.preventDefault();

		const isValidFormData: boolean = validation(data);

		if (!isValidFormData) return;

		onSubmit(data);
	};

	function handlerChange(newValue: IPropsHandlerChange): void {
		setData(prevState => ({ ...prevState, [newValue.name]: newValue.value }));
	};

	useEffect(() => {
		validation(data);
	}, [data]);

	return (
		<form title={titleForForm} className={`${classesParent}__form form`} onSubmit={handlerSubmit}>
			{newChildren}
		</form>
	);
};

export { FormComponent };
