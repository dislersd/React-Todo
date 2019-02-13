import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  return (
    <div className="todo-all">
      <div className="todo-list">
        {props.toDo.map((toDoFromMap, index) => 
          <ToDo key={index} toDo={toDoFromMap} remove={props.remove}/>
        )}
      </div>
      <div className="todo-form">
      </div>
    </div>
  )
};

export default ToDoList;
