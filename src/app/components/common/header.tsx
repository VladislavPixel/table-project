import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/header/logo.png";

interface HeaderProps {
	onUpdateHeight(type: "header" | "footer", value: number): void;
}

const Header: React.FC<HeaderProps> = ({ onUpdateHeight }) => {
	const headerRef = useRef(null);

	useEffect(() => {
		const refEl = headerRef.current;

		if (refEl) {
			const correctEl = refEl as HTMLElement;

			onUpdateHeight("header", correctEl.offsetHeight);
		}
	}, []);
	return (
		<header ref={headerRef} title="Шапка сайта." className="wrapper__header header">
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
