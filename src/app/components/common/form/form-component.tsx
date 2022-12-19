import validator from "../../../utils/validator"

const FormComponent = ({ children, onSubmit, defaultData, config, classesParent }) => {
	// STATE
	const [data, setData] = useState(defaultData || {})
	const [errors, setErrors] = useState({})
	// AUXILIARY
	const validation = useCallback((dataTarget) => {// Направляет конфиг и данные формы в валидатор, он проверяет и отдает ошибки, если они есть
		const errorSet = validator(dataTarget, config)
		setErrors(errorSet)
		return Object.keys(errorSet).length === 0 // Доп.проверка для handlerSubmit
	}, [config, setErrors])
	const isDisabledBtn = !(Object.keys(errors).length === 0)
	const newChildren = React.Children.map(children, child => {
		if (child !== null) {
			let newConfigChild // т.к. мы используем универсальную форму нам нужно дополнить детей некоторыми props
			if (child.props["data-trigger"]) { // Логика для форм, в которых FormComponent принимает блок, который уже раздает props на несколько полей
				newConfigChild = {
					...child.props,
					value: data,
					error: errors,
					onChange: handlerChange
				}
			} else if (typeof child.type === "object") { // Логика обычных форм, в которых FormComponent принимает сразу поля
				newConfigChild = {
					...child.props,
					value: data[child.props.name],
					error: (errors[child.props.name] !== undefined ? errors[child.props.name] : child.props.error),
					onChange: handlerChange
				}
			}
			if (child.type === "button") {
				if (child.props.type === undefined || child.props.type === "submit") {
					newConfigChild = {
						...child.props,
						className: child.props.className + (isDisabledBtn ? " no-active" : ""),
						disabled: isDisabledBtn
					}
				}
				if (child.props.type === "button") {
					let disabledConfig = child.props["data-status"] ? {} : { disabled: isDisabledBtn }
					newConfigChild = {
						...child.props,
						className: child.props.className + (isDisabledBtn && !child.props["data-status"] ? " no-active" : ""),
						...disabledConfig
					}
				}
			}

			return React.cloneElement(child, newConfigChild)
		}
	})
	// HANDLERS
	function handlerSubmit(event) {
		event.preventDefault()
		const isValidFormData = validation()
		if (!isValidFormData) return
		onSubmit(data)
	}
	function handlerChange(newValue) {
		setData( prevState => ({ ...prevState, [newValue.name]: newValue.value }) )
	}

	useEffect(() => { // При каждом изменении данных формы, когда мы вводим что-то в input, запускается валидация полей
		validation(data)
	}, [data])
	return (
		<form className={`${classesParent}__form form`} onSubmit={handlerSubmit}>
			{newChildren}
		</form>
	);
};

export default FormComponent;
