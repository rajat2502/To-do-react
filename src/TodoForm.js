import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo">
      <input
        type="text"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)}
        style={{ width: "100%", fontSize: "20px", padding: "3px" }}
      />
    </form>
  );
};

export default TodoForm;
