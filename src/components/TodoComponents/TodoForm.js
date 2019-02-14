import React from "react";

const ToDoForm = props => {
  return (
    <form>
      <input
        type="text"
        value={props.task}
        onChange={props.handleChanges}
        name="task"
        placeholder="task..."
      />
      <button onClick={props.addToDo} type="submit"> Add ToDo </button>
      <button onClick={props.clearCompleted} type="submit"> Clear Completed </button>
    </form>
  );
};

export default ToDoForm;



