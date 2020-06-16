import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faTrash,
	faTrashRestore,
	faWindowClose,
	faPencilAlt,
	faChevronUp,
	faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import Container from "./containers/Container";
import "./App.css";

library.add(faTrash, faTrashRestore, faWindowClose, faPencilAlt, faChevronUp, faChevronDown);

class App extends Component {
	render() {
		return <Container />;
	}
}

export default App;
