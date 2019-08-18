import React from "react";
import shortid from "shortid";

class Form extends React.Component {
  state = {
    text: ""
  };

  changeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitHandler = e => {
    this.props.addTask({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    e.preventDefault();
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="text"
          onChange={this.changeHandler}
          value={this.state.text}
        />
        <button type="submit" onSubmit={this.submitHandler}>
          Add Task
        </button>
      </form>
    );
  }
}

export default Form;
