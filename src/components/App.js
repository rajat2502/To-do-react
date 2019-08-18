import React from "react";
import Heading from "./Heading";
import Form from "./Form";
import TaskList from "./TaskList";
import Listbutton from "./Listbutton";

class App extends React.Component {
  state = {
    todos: [],
    todosToShow: "all",
    toggleAllComplete: true
  };

  addTask = todo => {
    const arr = this.state.todos;
    arr.unshift(todo);
    this.setState({
      todos: arr
    });
    console.log(this.state.todos);
  };

  toggleComplete = e => {
    const id = e.target.parentElement.parentElement.getAttribute("id");
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete
          };
        } else {
          return todo;
        }
      })
    });
  };

  updatetodosToShow = string => {
    this.setState({
      todosToShow: string
    });
  };

  handleDelete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  deleteComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.complete === false)
    });
  };

  toggleAll = () => {
    this.setState({
      todos: this.state.todos.map(todo => ({
        ...todo,
        complete: this.state.toggleAllComplete
      })),
      toggleAllComplete: !this.state.toggleAllComplete
    });
  };

  render() {
    let todos = [];
    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <>
        <Heading />
        <Form addTask={this.addTask} />
        {todos.map(todo => (
          <TaskList
            key={todo.id}
            task={todo.text}
            id={todo.id}
            complete={todo.complete}
            toggleComplete={this.toggleComplete}
            onDelete={() => this.handleDelete(todo.id)}
          />
        ))}
        <div>
          Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <Listbutton
          updatetodosToShow={this.updatetodosToShow}
          deleteComplete={this.deleteComplete}
          todos={this.state.todos}
          toggleAllComplete={this.state.toggleAllComplete}
          toggleAll={this.toggleAll}
        />
      </>
    );
  }
}

export default App;
