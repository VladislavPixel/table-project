import React, { useState } from "react";
import Dots from "../../images/icons/dots.svg";
import Close from "../../images/icons/close.svg";

interface ColumnDataTableProps {
	index: number;
	value: string;
	maxIndex: number;
};

const ColumnDataTable: React.FC<ColumnDataTableProps> = ({ value, index, maxIndex }) => {
	const [isModal, setModal] = useState(false);

	function getContent(valueStr: string): string | React.ReactNode {
		if (valueStr.length <= 60) {
			return valueStr;
		}

		return (
			<span>
				{valueStr.slice(0, 60)}
				<img onClick={() => setModal(true)} title="Нажмите, чтобы раскрыть модальное окно с полным текстом." src={Dots} alt="Иконка трех точек." />
			</span>
		);
	}

	return (
		<div className="surname-table__column-data">
			{index === maxIndex - 1
				? <button title="Нажмите, чтобы загрузить данные для этого человека." className="surname-table__btn-download" type="button">Загрузить</button>
				: <p className="surname-table__text-data">{getContent(value)}</p>
			}
			{isModal &&
				<div title="Модальное окно для расширенного просмотра." className="surname-table__mini-modal">
					<img onClick={() => setModal(false)} title="Нажмите, чтобы закрыть модальное окно." className="surname-table__img-close" src={Close} alt="Иконка крестика-закрывает." />
					{value}
				</div>
			}
		</div>
	);
};

export { ColumnDataTable };
