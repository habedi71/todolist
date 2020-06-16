import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ id, todoDone, onClick }) => {
	const btnStyle = todoDone
		? { bg: "bg-warning", icon: "trash", title: "Remove" }
		: { bg: "bg-info text-white", icon: "trash-restore", title: "Recover" };
	return (
		<>
			<button
				onClick={() => onClick(id)}
				title={btnStyle.title}
				className={`btn btn-sm ${btnStyle.bg} mx-1`}
			>
				<FontAwesomeIcon icon={btnStyle.icon} size="1x" />
			</button>
		</>
	);
};

export default Button;
