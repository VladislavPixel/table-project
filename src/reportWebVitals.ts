import type { ReportHandler } from "web-vitals";

/* eslint-disable */
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
		});
	}
};
/* eslint-enable */

export default reportWebVitals;
