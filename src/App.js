import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import List from "./components/List";
import SubmitForm from "./components/SubmitForm";

class App extends Component {
	state = {
		todo: "",
		count: 0,
		todos: [],
	};

	clickHandler = (e) => {
		const id = Number(e.target.name);
		let todos = [];
		if (id > 0) {
			todos = this.state.todos.map((todo) => {
				return id === todo.id ? { task: todo.task, done: !todo.done, id: todo.id } : todo;
			});
		} else {
			todos = this.state.todos.filter((todo) => todo.id !== Math.abs(id));
		}
		this.setState({ todos });
	};

	changeHandler = (e) => {
		this.setState({ todo: e.target.value });
	};

	submitHandler = (e) => {
		e.preventDefault();
		e.target["todoInput"].value = "";
		let { todo, count, todos } = this.state;
		count++;
		const newTodo = { task: todo, done: false, id: count };
		this.setState({ todos: [...todos, newTodo], count: count, todo: "" });
	};

	render() {
		return (
			<div className="d-flex flex-column align-items-center">
				<div className="col-xl-5 col-lg-8 col-sm-10">
					<SubmitForm on_submit={this.submitHandler} on_change={this.changeHandler} />
					<h4>Todo List</h4>
					<hr />
					<List
						on_click={this.clickHandler}
						on_change={this.changeHandler}
						todoDone={true}
						currentTodos={this.state.todos}
					/>
					<h4 className="mt-4">List History</h4>
					<hr />
					<List on_click={this.clickHandler} todoDone={false} currentTodos={this.state.todos} />
				</div>
			</div>
		);
	}
}

export default App;
