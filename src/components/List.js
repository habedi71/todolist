import React from "react";

import Item from "./Item";
import Button from "./Button";

const List = ({ currentTodos, on_click, todoDone, title }) => {
	// the map function will read todos list passed in from App state
	// and create a List component
	const todoList = currentTodos.map((todo) => {
		if (todo.done === !todoDone) {
			return (
				<Item key={todo.id} todo={todo}>
					<Button id={todo.id} onClick={on_click} todoDone={todoDone} />
				</Item>
			);
		}
		return "";
	});

	return <ul className="shadow p-3 mb-5 bg-white rounded list-group w-100">{todoList}</ul>;
};

export default List;
