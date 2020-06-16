import React, { Component } from "react";
import { uuid } from "uuidv4";
import List from "../components/List";
import SubmitTodoForm from "../components/SubmitTodoForm";

class Container extends Component {
	state = {
		todos: [],
	};

	clickHandler = (id) => {
		let todos = [];
		todos = this.state.todos.map((todo, index) => {
			return index === id ? { task: todo.task, done: !todo.done, id: todo.id } : todo;
		});

		this.setState({ todos });
	};

	submitHandler = (input) => {
		if (input.length === 0) {
			return;
		}
		const todos = [...this.state.todos];
		const newTodo = { task: input, done: false, id: uuid() };
		this.setState({ todos: [...todos, newTodo] });
	};

	clickDeleteHandler = (id) => {
		const todos = this.state.todos.filter((t, index) => index !== id);
		this.setState({ todos });
	};

	clickMoveHandler = (id, step) => {
		if ((id === 0 && step < 0) || (id === this.state.todos.length - 1 && step > 0)) {
			return;
		}
		// // const from = id;
		// // const to = from + step;
		// console.log(from, to);
		const todos = [...this.state.todos];
		todos[id + step] = this.state.todos[id];
		todos[id] = this.state.todos[id + step];

		this.setState({ todos });
	};

	render() {
		return (
			<div className="container-fluid d-flex flex-column align-items-center">
				<div className="col-lg-6 col-md-8 col-sx-10">
					<SubmitTodoForm onSubmitProps={this.submitHandler} />
					<h4>Todo List</h4>
					<hr />
					<List
						onClickProps={this.clickHandler}
						onClickMove={this.clickMoveHandler}
						todoDone={true}
						currentTodos={this.state.todos}
					/>
					<h4 className="mt-4">Todo History</h4>
					<hr />
					<List
						onClickProps={this.clickHandler}
						onClickDelete={this.clickDeleteHandler}
						todoDone={false}
						currentTodos={this.state.todos}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
