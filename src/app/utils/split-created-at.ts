function splitCreatedAt(value: string): string {
	const newString = value.replace(/(T|.|\+)/g, (val) => {
		switch (val) {
			case "T":
				return " T";
			case ".":
				return " .";
			case "+":
				return " +";
			default:
				return val;
		}
	});

	return newString;
};

export { splitCreatedAt };
