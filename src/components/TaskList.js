import React from "react";

class TaskList extends React.Component {
  clickHandler = e => {
    this.props.toggleComplete(e);
  };

  render() {
    return (
      <>
        <div
          className="task"
          id={this.props.id}
          style={{
            backgroundColor: this.props.complete ? "green" : "rgb(0, 148, 212)"
          }}
        >
          {this.props.task}
          <span>
            <button onClick={this.clickHandler}>toggle</button>
          </span>
          <span>
            <button onClick={this.props.onDelete}>del</button>
          </span>
        </div>
      </>
    );
  }
}

export default TaskList;
