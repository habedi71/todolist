import React from "react";

class SubmitTodoForm extends React.Component {
	state = {
		input: "",
	};

	handleChange = (e) => {
		this.setState({ input: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		e.target["todoInput"].value = "";
		e.target["todoInput"].focus();
		if (this.state.input.length === 0) {
			return;
		}
		this.props.onSubmitProps(this.state.input);
	};

	render() {
		return (
			<form
				className="shadow p-3 mb-5 bg-white rounded d-flex flex-row m-5"
				onSubmit={this.handleSubmit}
			>
				<input
					type="text"
					name="todoInput"
					onChange={this.handleChange}
					className="col form-control mb-2 mr-sm-2"
					placeholder="Enter Todo"
				></input>
				<button className="btn btn-primary mb-2">Add Todo</button>
			</form>
		);
	}
}

export default SubmitTodoForm;
