import React from "react";

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className="todo">
      <h1 style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </h1>
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
