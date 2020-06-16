import React from "react";

class SubmitTodoForm extends React.Component {
	state = {
		input: "",
	};

	handleChange = (e) => {
		this.setState({ input: e.target.value });
	};

	handleClick = (e) => {
		const inputElement = document.getElementById("todoInput");
		inputElement.value = "";
		inputElement.focus();
		if (this.state.input.length === 0) {
			return;
		}
		const newInput = this.state.input;
		this.setState({ input: "" });
		this.props.onSubmitProps(newInput);
	};

	render() {
		return (
			<div className="shadow px-2 bg-white rounded d-flex flex-row my-5">
				<input
					type="text"
					id="todoInput"
					onChange={this.handleChange}
					className="col form-control mb-2 mr-sm-2"
					placeholder="Enter Todo"
				/>
				<button onClick={this.handleClick} className="btn btn-primary mb-2">
					Add Todo
				</button>
			</div>
		);
	}
}

export default SubmitTodoForm;
