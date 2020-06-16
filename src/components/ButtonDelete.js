import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonDelete = ({ id, onClickDelete }) => {
	return (
		<button onClick={() => onClickDelete(id)} title="Delete" className="btn btn-sm btn-info text-white">
			<FontAwesomeIcon icon="window-close" />
		</button>
	);
};

export default ButtonDelete;
