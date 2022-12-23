import type React from "react";

const Spinner: React.FC = () => {
	return (
		<div className="spinner-wrap">
			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export { Spinner };
