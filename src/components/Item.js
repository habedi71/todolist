import React from "react";

const Item = ({ todo, children }) => {
	const textStyle = todo.done ? "text-muted font-weight-normal" : "font-weight-bold";
	return (
		<li className="list-group-item">
			<div className="row">
				{children}
				<span className={`${textStyle} mx-2 align-center`}>{todo.task}</span>
			</div>
		</li>
	);
};

export default Item;
