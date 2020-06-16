import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonMove = ({ id, lastId, onClickMove }) => {
	const btnStyle = "btn btn-sm bg-outline-warning";

	return (
		<div className="d-flex flex-column">
			{id > 0 ? (
				<button onClick={() => onClickMove(id, -1)} title="Up" className={btnStyle}>
					<FontAwesomeIcon icon="chevron-up" size="xs" />
				</button>
			) : (
				""
			)}

			{id < lastId - 1 ? (
				<button onClick={() => onClickMove(id, 1)} title="Down" className={btnStyle}>
					<FontAwesomeIcon icon="chevron-down" size="xs" />
				</button>
			) : (
				""
			)}
		</div>
	);
};

export default ButtonMove;
