import React from "react";

const SubmitForm = ({ on_change, on_submit }) => {
	return (
		<form className="shadow p-3 mb-5 bg-white rounded d-flex flex-row m-5 w-100" onSubmit={on_submit}>
			<input
				type="text"
				name="todoInput"
				onChange={on_change}
				className="col form-control mb-2 mr-sm-2"
				placeholder="Enter Todo"
			></input>
			<button className="btn btn-primary mb-2">Add Todo</button>
		</form>
	);
};

export default SubmitForm;
