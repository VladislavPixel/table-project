import React, { useState } from "react";
import CloseIcon from "../../images/icons/close.svg";
import type { IUserTable } from "../../interfaces";
import { setStateModal } from "../../store/modal";

import {
	useAppDispatch,
	useAppSelector
} from "../../hooks/hooks-redux";

import {
	getDataForTargetUser,
	getCurrentSearchForUsers
} from "../../store/users";

import {
	FormComponent,
	TextField
} from "./form";

interface ModalComponentProps {
	classesParent: string;
};

type INewData = Record<string, string | Record<string, string | FileList>>;

const ModalComponent: React.FC<ModalComponentProps> = ({ classesParent }) => {
	const dispatch = useAppDispatch();

	const dataTargetUser: null | IUserTable = useAppSelector(getDataForTargetUser());

	const currentSearch = useAppSelector(getCurrentSearchForUsers());

	const isData: boolean = dataTargetUser !== null;

	const [data] = useState<Record<string, string | Record<string, any>>>({
		engineerName: "",
		files: {
			link: "",
			dataFiles: {}
		}
	});

	function handlerCloseModal(): void {
		dispatch(setStateModal());
	}

	function handlerSubmitForm(newData: INewData): void {
		const data = newData as any;

		const formData = new FormData();

		formData.append("name", currentSearch);

		for (const key in data) {
			if (typeof data[key] === "string") {
				formData.append(key, data[key]);
			} else if (typeof data[key] === "object") {
				formData.append("files", data[key].dataFiles);
			}
		}

		console.log("Реализация запроса для отправки формдата", formData);
		console.log(data);
		dispatch(setStateModal());
	}

	const validatorConfig = {
		engineerName: { isRequired: { message: `Поле "ФИО инженера" обязательно для заполнения.` } },
		files: { isRequired: { message: `К полю "Файлы" должен быть прикреплен 1 или несколько файлов.`, type: "file" } }
	};

	return (
		<div title="Модальное окно, в котором Вы можете добавить информацию об инженере и прикрепить файлы." className={`${classesParent}__modal-block block-modal`}>
			<div className="block-modal__container">
				<button onClick={handlerCloseModal} title="Нажмите, чтобы закрыть модальное окно." type="button" className="block-modal__close-btn">
					<img className="block-modal__close-icon" src={CloseIcon} alt="Иконка крестика-закрывает модальное окно." />
				</button>
				<h2 className="block-modal__title">Введите дополнительные данные.</h2>
				<p className="block-modal__text">Требуется указать ФИО инженера и прикрепить файлы.</p>
				<p className="block-modal__user-name">{isData ? dataTargetUser!["ФИО"] : "Что-то пошло не так, мы не получили данные по человеку."}</p>
				{isData &&
					<FormComponent config={validatorConfig} defaultData={data} titleForForm="Форма, для пополнения таблицы данными." onSubmit={handlerSubmitForm} classesParent="block-modal">
						<TextField name="engineerName" label="ФИО инженера:" placeholder="начните вводить ФИО инженера" type="text" />
						<TextField name="files" label="Файлы:" placeholder="прикрепите файлы" type="file" />
						<button title="Нажмите, чтобы отправить данные." className="block-modal__btn-sub blue-btn" type="submit">Отправить</button>
					</FormComponent>
				}
			</div>
		</div>
	);
};

export { ModalComponent };
