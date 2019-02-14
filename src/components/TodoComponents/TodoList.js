import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div className="todo-all">
        {props.toDo.map((toDoFromMap, index) => 
          <ToDo 
          key={index}
          toDo={toDoFromMap}
          toggle={props.toggle}
          />
        )}
    </div>
  )
};

export default ToDoList;
