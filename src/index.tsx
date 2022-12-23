import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./app/store/create-store";

const containerHTML = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(containerHTML);

const store = createStore();

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
