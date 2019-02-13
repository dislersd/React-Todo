import React from "react";

const ToDoForm = props => {
  return (
    <form onSubmit={props.addToDo}>
      <input
        type="text"
        value={props.task}
        onChange={props.handleChanges}
        name="task"
        placeholder="task..."
      />
      <button type="submit"> Add ToDo </button>
      <button type="submit"> Clear Completed </button>
    </form>
  );
};

export default ToDoForm;
