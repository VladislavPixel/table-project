import type React from "react";

import { useNavigate } from "react-router-dom";

interface RedirectToPageProps {
	classesParent: string;
	title: string;
	path: string;
};

const RedirectToPage: React.FC<RedirectToPageProps> = ({ classesParent, title, path }) => {
	const navigate = useNavigate();

	function handlerClickBtnLink(): void {
		navigate(path);
	}

	return (
		<div className={`${classesParent}__wrap-link`}>
			<button title="Эта кнопка Вас перенаправит" onClick={handlerClickBtnLink} type="button" className={`${classesParent}__btn-link green-btn`}>{title}</button>
		</div>
	);
};

export { RedirectToPage };
