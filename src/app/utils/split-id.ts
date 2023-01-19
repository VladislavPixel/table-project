function splitId(value: string): string {
	const newValue = value.replace(/-/g, (val) => {
		return " -";
	});

	return newValue;
};

export { splitId };
