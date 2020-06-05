import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import ButtonDelete from "./ButtonDelete";

const Button = ({ id, todoDone, onClick }) => {
	const btnStyle = todoDone
		? { bg: "bg-warning", icon: faAngleDown, title: "Remove" }
		: { bg: "bg-info text-white", icon: faAngleUp, title: "Recover" };
	return (
		<>
			<button
				onClick={() => onClick(id)}
				title={btnStyle.title}
				className={`${btnStyle.bg} px-3 mx-2 border-0 rounded`}
			>
				<FontAwesomeIcon icon={btnStyle.icon} />
			</button>
			<ButtonDelete todoDone={todoDone} id={id} onClick={onClick} />
		</>
	);
};

export default Button;
