import type React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/header/logo.png";

const Header: React.FC = () => {
	return (
		<header className="wrapper__header header">
			<div className="header__container _container">
				<Link className="header__link" to="/">
					<img className="header__image" src={Logo} alt="Герб Московского Университета МВД России им. В.Я. Кикотя." />
				</Link>
				<h1 className="header__title">Московский Университет МВД России им. В.Я. Кикотя.</h1>
			</div>
		</header>
	);
};

export default Header;
