import React, { useRef, useEffect } from "react";

interface FooterProps {
	onUpdateHeight(type: "header" | "footer", value: number): void;
}

const Footer: React.FC<FooterProps> = ({ onUpdateHeight }) => {
	const footerRef = useRef(null);

	useEffect(() => {
		const refEl = footerRef.current;

		if (refEl) {
			const correctEl = refEl as HTMLElement;

			onUpdateHeight("footer", correctEl.offsetHeight);
		}
	}, []);
	return (
		<footer ref={footerRef} title="Информация о разработчике." className="wrapper__footer footer">
			<div className="footer__container _container">
				<p className="footer__text">Разработка Информационного Центра Московского Университета МВД России им. В. Я. Кикотя. 2022 - 2023 г.г.</p>
			</div>
		</footer>
	);
};

export { Footer };
