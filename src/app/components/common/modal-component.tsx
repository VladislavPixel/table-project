import type React from "react";
import CloseIcon from "../../images/icons/close.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks-redux";
import { setStateModal } from "../../store/modal";
import { getDataForTargetUser } from "../../store/users";
import type { IUserTable } from "../../interfaces";

interface ModalComponentProps {
	classesParent: string;
};

const ModalComponent: React.FC<ModalComponentProps> = ({ classesParent }) => {
	const dispatch = useAppDispatch();

	const dataTargetUser: null | IUserTable = useAppSelector(getDataForTargetUser());

	const isData: boolean = dataTargetUser !== null;

	function handlerCloseModal(): void {
		dispatch(setStateModal());
	}

	return (
		<div title="Модальное окно, в котором Вы можете добавить информацию об инженере и прикрепить файлы." className={`${classesParent}__modal-block block-modal`}>
			<div className="block-modal__container">
				<button onClick={handlerCloseModal} title="Нажмите, чтобы закрыть модальное окно." type="button" className="block-modal__close-btn">
					<img className="block-modal__close-icon" src={CloseIcon} alt="Иконка крестика-закрывает модальное окно." />
				</button>
				<h2 className="block-modal__title">Введите дополнительные данные.</h2>
				<p className="block-modal__text">Требуется указать ФИО инженера и прикрепить файлы.</p>
				<p className="block-modal__user-name">{isData ? dataTargetUser!["ФИО"] : "Что-то пошло не так, мы не получили данные по человеку."}</p>
			</div>
		</div>
	);
};

export { ModalComponent };
