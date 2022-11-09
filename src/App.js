import { Component } from "react";
import Overview from "./components/Overview";
//TODO Arreglar esto
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" />
        <button>Add</button>
        <Overview/>
      </div>
    );
  }
}

export default App;
