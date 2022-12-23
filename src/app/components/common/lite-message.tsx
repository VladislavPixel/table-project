import type React from "react";
import SadSmile from "../../images/icons/sad-smile.svg";

interface LiteMessageProps {
	classesParent: string;
	title: string;
	offer: string;
};

const LiteMessage: React.FC<LiteMessageProps> = ({ classesParent, title, offer }) => {
	return (
		<div className={`${classesParent}__lite-message message-lite`}>
			<img className="message-lite__icon" src={SadSmile} alt="Иконка грустного смайлика." />
			<p className="message-lite__text">{title}</p>
			<p className="message-lite__offer">{offer}</p>
		</div>
	);
};

export { LiteMessage };
