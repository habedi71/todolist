import React from "react";

const Item = ({ todo, children }) => {
	const textStyle = todo.done ? "text-muted font-weight-normal" : "font-weight-bold";
	return (
		<li className="list-group-item">
			<div className="d-flex align-items-center">
				{children}
				<span className={`ml-2 ${textStyle}`} id={`item_${todo.id}`}>
					{todo.task}
				</span>
			</div>
		</li>
	);
};

export default Item;
