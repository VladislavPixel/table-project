import type React from "react";
import Header from "./components/common/header";
import Search from "./layots/search";
import Footer from "./components/common/footer";
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
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
