toDoArray = [clean, cook, sleep]


class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDo: toDoArray,
      task: "",
      id: Date.now(),
      completed: false
    };
  }

  // addStudent = e => {
  //   e.preventDefault();
  //   const newStudent = {
  //     name: this.state.name,
  //     identity: this.state.identity,
  //     img: this.state.img,
  //     age: this.state.age,
  //     bestFriend: this.state.bestFriend
  //   };

  //   this.setState({
  //     students: [...this.state.students, newStudent],
  //     name: "",
  //     identity: "",
  //     img: "",
  //     age: "",
  //     bestFriend: ""
  //   });
  // };

  // handleChanges = e => {
  //   console.log(e.target.value);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <h1>ToDo List:</h1>
        <div className="class-list">
          {this.state.toDoArray.map((toDofromMap, index) => (
            <ToDo key={index} task={toDofromMap} />
          ))}
        </div>
        {/* <StudentForm
          addStudent={this.addStudent}
          name={this.state.name}
          handleChanges={this.handleChanges}
          identity={this.state.identity}
          img={this.state.img}
          age={this.state.age}
          bestFriend={this.state.bestFriend}
        /> */}
      </div>
    );
  }
}

export default ToDoList;
