import { Component } from "react";
import Overview from "./components/Overview";
//TODO Arreglar esto
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      task: ''
    }
    this.updateList = this.updateList.bind(this)
  }
  updateTask(newTask) {
    this.setState({
      task: newTask
    })
  }

  updateList() {
    // this.setState((state) => ({
    //   tasks: this.state.tasks.concat(<li key={Date.now()}>{state.task}</li>),
    //   task: ''
    // }))

    this.setState((state) => ({
      tasks: this.state.tasks.concat(state.task),
      task: ''
    }), () => {
      console.log(this.state.tasks)
    })

  }

  stopDefault(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.stopDefault}>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            onChange={(e) => this.updateTask(e.target.value)}
            value={this.state.task}
          />
          <button onClick={this.updateList}>Add</button>
          <Overview
            tasksList={this.state.tasks}
          />
        </form>
      </div>
    );
  }
}

export default App;