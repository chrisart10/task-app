import { Component } from 'react';
import uniqid from "uniqid";

class Overview extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.tasksList)
        const renderList = this.props.tasksList.map((task)=>{
            return <li key={uniqid()}>{task}</li>
        })
        return (
            <div>
                {!(this.props.tasksList.length === 0) &&
                <ol>
                     { renderList }
                </ol>   
                }
            </div>
        );
    }
}

export default Overview;