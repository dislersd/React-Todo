import React from "react"

const ToDo = props => {
  return (
    <div>
      <p>{props.toDo.task}</p>
      <button onClick={props.remove}>
        click me
      </button>
    </div>
  );
}

export default ToDo;