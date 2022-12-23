import type React from "react";
import { Header } from "./components/common/header";
import { Search } from "./layots/search";
import { Footer } from "./components/common/footer";
import { TableBySurname } from "./layots/table-by-surname";
import "./scss/style.scss";

import {
	Routes,
	Route
} from "react-router-dom";

const App: React.FC = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="wrapper__content block-content">
				<Routes>
					<Route path="/" element={<Search />} />
					<Route path="/table-surname/:surName" element={<TableBySurname />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
