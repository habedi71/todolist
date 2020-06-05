import React, { Component } from "react";
import List from "../components/List";
import SubmitTodoForm from "../components/SubmitTodoForm";

class Container extends Component {
	state = {
		count: 0,
		todos: [],
	};

	clickHandler = (id) => {
		let todos = [];
		if (id > 0) {
			todos = this.state.todos.map((todo) => {
				return todo.id === id ? { task: todo.task, done: !todo.done, id: todo.id } : todo;
			});
		} else {
			todos = this.state.todos.filter((todo) => todo.id !== Math.abs(id));
		}
		this.setState({ todos });
	};

	submitHandler = (input) => {
		if (input.length === 0) {
			return;
		}
		let { count, todos } = this.state;
		const newTodo = { task: input, done: false, id: ++count };
		this.setState({ todos: [...todos, newTodo], count });
	};

	render() {
		return (
			<div className="d-flex flex-column align-items-center">
				<div className="col-xl-5 col-lg-8 col-sm-10">
					<SubmitTodoForm onSubmitProps={this.submitHandler} />
					<h4>Todo List</h4>
					<hr />
					<List onClickProps={this.clickHandler} todoDone={true} currentTodos={this.state.todos} />
					<h4 className="mt-4">List History</h4>
					<hr />
					<List onClickProps={this.clickHandler} todoDone={false} currentTodos={this.state.todos} />
				</div>
			</div>
		);
	}
}

export default Container;
