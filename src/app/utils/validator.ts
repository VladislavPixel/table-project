function validator(dataObject, configObject) {
	const errorsList = {}
	const validate = (method, value, objectWithConfigForMethod) => {
		let statusValidate
		switch (method) {
			case "isRequired":
				if (typeof value === "boolean") {
					statusValidate = !value === true
				} else {
					statusValidate = value.trim() === ""
				}
			break
			case "range":
				const valueNumber = Number(value)
				statusValidate = !(valueNumber >= objectWithConfigForMethod.min && valueNumber <= objectWithConfigForMethod.max)
			break
			case "isEmail":
				statusValidate = !(/^\S+@\S+\.\S+$/g.test(value))
			break
			case "num":
				statusValidate = !(/\d+/g.test(value))
			break
			case "isPhone":
				statusValidate = !(/^8\d+$/g.test(value))
			break
			case "specificAmountElements":
				statusValidate = value.trim().length > objectWithConfigForMethod.score || value.trim().length < objectWithConfigForMethod.score
			break
			case "upperEl":
				statusValidate = !(/[A-Z]+/g.test(value))
			break
			case "specialCharacter":
				statusValidate = !(/(?=.*[!@#$%&^*?])/g.test(value))
			break
			case "minElements":
				statusValidate = value.trim().length < objectWithConfigForMethod.value
			break
			default:
				break
		}
		if (statusValidate) return objectWithConfigForMethod.message
	}

	for (const key in dataObject) {
		for (const validateMethod in configObject[key]) {
			const error = validate(validateMethod, dataObject[key], configObject[key][validateMethod])
			if (error && !errorsList[key]) errorsList[key] = error
		}
	}

	return errorsList
}

export default validator