import React from "react"

const ToDo = props => {
  return (
    <ul>
      <li onClick={() => props.toggle(props.toDo.id)}> {props.toDo.task} </li>
    </ul>
  );
}

export default ToDo;