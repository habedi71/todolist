import React from "react";

import Item from "./Item";
import Button from "./Button";
import ButtonDelete from "./ButtonDelete";
import ButtonMove from "./ButtonMove";

const List = ({ currentTodos, onClickProps, onClickDelete, onClickMove, todoDone }) => {
	// the map function will read todos list passed in from App state
	// and create a List component
	const todoList = currentTodos.map((todo, index) => {
		if (todo.done === !todoDone) {
			return (
				<Item key={index} todo={todo}>
					<Button onClick={onClickProps} id={index} todoDone={todoDone} />
					{todoDone ? (
						<ButtonMove id={index} lastId={currentTodos.length} onClickMove={onClickMove} />
					) : (
						<ButtonDelete id={index} onClickDelete={onClickDelete} />
					)}
				</Item>
			);
		}
		return "";
	});

	return <ul className="shadow p-2 m-2 bg-white rounded w-100">{todoList}</ul>;
};

export default List;
