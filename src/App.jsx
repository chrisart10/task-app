import { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

//TODO Arreglar esto
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			task: {
				text: "",
				id: uniqid(),
			},
		};
		this.updateTask = this.updateTask.bind(this);
		this.updateList = this.updateList.bind(this);
	}
	updateTask(e) {
		this.setState((state) => ({
			task: { text: e.target.value, id: state.task.id },
		}));
	}

	updateList(e) {
		console.log(e);
		e.preventDefault();
		console.log(this.state.task);
		this.setState(
			(state) => ({
				tasks: this.state.tasks.concat(state.task),
				task: { text: "", id: uniqid() },
			}),
			() => {
				console.log(this.state.task);
			}
		);
	}

	render() {
		return (
			<div className="app">
				<form onSubmit={this.updateList}>
					<label htmlFor="task">Task:</label>
					<input
						type="text"
						id="task"
						onChange={this.updateTask}
						value={this.state.task.text}
					/>
					<button>Add</button>
					<Overview tasksList={this.state.tasks} />
				</form>
			</div>
		);
	}
}

export default App;
