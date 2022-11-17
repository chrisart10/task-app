import { Component } from "react";

class Overview extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		// console.log(this.props.tasksList)
		if (this.props.tasksList.length === 0) return <></>;

		const renderList = this.props.tasksList.map((task) => {
			return <li key={task.id}>{task.text}</li>;
		});
		return (
			<div>
				<ol>{renderList}</ol>
			</div>
		);
	}
}

export default Overview;
