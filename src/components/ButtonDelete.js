import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ButtonDelete = ({ id, onClick, todoDone }) => {
	const btnStyle = { bg: "bg-info text-white", icon: faTrashAlt };
	if (!todoDone) {
		return (
			<button
				onClick={onClick}
				name={`-${id}`}
				title="Delete"
				className={`${btnStyle.bg} px-3 pb-1 m-0 border-0 rounded`}
			>
				<FontAwesomeIcon className="small" icon={btnStyle.icon} />
			</button>
		);
	}
	return "";
};

export default ButtonDelete;
