import type React from "react";
import Detective from "../../../images/icons/detective.svg";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="block-content__not-found not-found _container">
			<div className="not-found__block">
				<div className="not-found__img-container">
					<img className="not-found__img" src={Detective} alt="Иконка детектива." />
				</div>
				<h2 className="not-found__title">Запрошенная страница не была найдена. Вы делаете что-то не так...</h2>
				<p className="not-found__offer">Вы можете перейти на главную страницу и начать все с начала.</p>
				<button onClick={() => navigate("/")} title="Нажмите, чтобы перейти на главную страницу ввода фамилии." className="not-found__btn-link blue-btn" type="button">Перейти на главную</button>
			</div>
		</div>
	);
};

export { NotFoundPage };
