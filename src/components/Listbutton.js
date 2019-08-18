import React from "react";

const Listbutton = props => {
  return (
    <>
      <button style={styles} onClick={() => props.updatetodosToShow("all")}>
        All
      </button>
      <button style={styles} onClick={() => props.updatetodosToShow("active")}>
        Active
      </button>
      <button
        style={styles}
        onClick={() => props.updatetodosToShow("complete")}
      >
        Complete
      </button>
      {props.todos.some(todo => todo.complete) ? (
        <button
          style={{ display: "block", margin: "5px auto" }}
          onClick={props.deleteComplete}
        >
          Delete Completed Todos
        </button>
      ) : null}
      {/* {props.todos.length ? } */}
      {props.todos.length ? (
        <button
          style={{ display: "block", margin: "5px auto" }}
          onClick={props.toggleAll}
        >
          Toggle All: {`${props.toggleAllComplete}`}
        </button>
      ) : null}
    </>
  );
};

const styles = {
  margin: "3px"
};

export default Listbutton;
