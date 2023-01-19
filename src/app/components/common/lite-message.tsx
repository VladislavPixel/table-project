import type React from "react";
import { useNavigate } from "react-router-dom";
import SadSmile from "../../images/icons/sad-smile.svg";

interface LiteMessageProps {
	classesParent: string;
	title: string;
	offer: string;
	pathLink: string;
};

const LiteMessage: React.FC<LiteMessageProps> = ({ classesParent, title, offer, pathLink }) => {
	const navigate = useNavigate();

	const handlerClickBtn = (): void => {
		navigate(pathLink);
	};

	return (
		<div className={`${classesParent}__lite-message message-lite`}>
			<img title="Грустная мордочка" className="message-lite__icon" src={SadSmile} alt="Иконка грустного смайлика." />
			<p className="message-lite__text">{title}</p>
			<p className="message-lite__offer">{offer}</p>
			<button title="Переход" onClick={handlerClickBtn} className="message-lite__btn-link blue-btn" type="button">Нажмите, чтобы сделать переход</button>
		</div>
	);
};

export { LiteMessage };
