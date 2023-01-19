import React, { useState, useEffect } from "react";
import { Header } from "./components/common/header";
import { Search } from "./layots/search";
import { Footer } from "./components/common/footer";
import { ModalComponent } from "./components/common/modal-component";
import { NotFound } from "./layots/not-found";
import { TableBySurname } from "./layots/table-by-surname";
import { TableAdditional } from "./layots/table-additional-data";
import { useAppSelector } from "./hooks/hooks-redux";
import { getStateModal } from "./store/modal";
import "./scss/style.scss";

import {
	Routes,
	Route,
	useLocation
} from "react-router-dom";

const App: React.FC = () => {
	const isModal: boolean = useAppSelector(getStateModal());

	const { pathname } = useLocation();

	console.log(pathname);

	const [heightHeader, setHeightHeader] = useState<number>(0);

	const [heightFooter, setHeightFooter] = useState<number>(0);

	const [styleConfigContent, setStyleConfigContent] = useState<{ height: string }>({
		height: "100vh"
	});

	const handlerUpdateHeight = (type: "header" | "footer", value: number): void => {
		if (type === "header") {
			setHeightHeader(value);
		}

		if (type === "footer") {
			setHeightFooter(value);
		}
	};

	const getStyleConfigContent = (): {} | { height: string } => {
		if (pathname.startsWith("/table-surname/")) {
			return styleConfigContent;
		}

		return {};
	};

	useEffect(() => {
		setStyleConfigContent({
			height: `calc(100vh - ${heightHeader}px - ${heightFooter}px)`
		});
	}, [heightFooter, heightHeader]);
	return (
		<div className="wrapper">
			<Header onUpdateHeight={handlerUpdateHeight} />
			<main style={getStyleConfigContent()} className="wrapper__content block-content">
				<Routes>
					<Route path="/" element={<Search />} />
					<Route path="/table-surname/:surName" element={<TableBySurname />} />
					<Route path="/table-additional" element={<TableAdditional />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
			<Footer onUpdateHeight={handlerUpdateHeight} />
			{isModal && <ModalComponent classesParent={"wrapper"} />}
		</div>
	);
};

export default App;
