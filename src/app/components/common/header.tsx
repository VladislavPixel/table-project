import type React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/header/logo.png";

const Header: React.FC = () => {
	return (
		<header title="Шапка сайта." className="wrapper__header header">
			<div className="header__container _container">
				<Link title={`Нажмите, чтобы перейти на стартовую страницу по адресу: "/".`} className="header__link" to="/">
					<img className="header__image" src={Logo} alt="Герб Московского Университета МВД России им. В.Я. Кикотя." />
				</Link>
				<h1 className="header__title">Московский Университет МВД России имени В.Я. Кикотя.</h1>
			</div>
		</header>
	);
};

export { Header };
