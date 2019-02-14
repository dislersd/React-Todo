import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm';
import ToDoList from './components/TodoComponents/TodoList';
import "./components/TodoComponents/Todo.css"

const toDoArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: toDoArray,
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  addToDo = (e, task) => {
    e.preventDefault();
    const newToDo = {
      task: task,
      id: Date.now(),
      completed: false
  };
    this.setState({
      toDo: [...this.state.toDo, newToDo],
      task: ""
    });
  };

  toggle = itemId => {
    this.setState({
      toDo: this.state.toDo.map( item => {
        if (itemId === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div className='app'>
        <ToDoList 
        toDo={this.state.toDo} 
        toggle={this.toggle}  
        />
        <ToDoForm 
        value={this.state.task}  
        addToDo={this.addToDo}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
