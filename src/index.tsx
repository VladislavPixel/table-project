import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const containerHTML = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(containerHTML);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
