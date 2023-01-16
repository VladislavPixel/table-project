import React from "react";

import { Spinner } from "../common/spinner";

const withLoading = (Component: React.ReactNode, statusLoading: boolean): () => JSX.Element => {
	return function wrapLoading(): JSX.Element {
		return (
			statusLoading ? <Spinner /> : <React.Fragment>{Component}</React.Fragment>
		);
	};
};

export { withLoading };
