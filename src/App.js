import React, { useState } from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, settodos] = useState([
    {
      text: "learn React",
      isCompleted: false
    },
    {
      text: "build Todo app",
      isCompleted: false
    },
    {
      text: "Learn Flexbox",
      isCompleted: false
    },
    {
      text: "Learn DS",
      isCompleted: false
    },
    {
      text: "Make Project",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    settodos(newTodos);
    console.log(todos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    settodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    settodos(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
