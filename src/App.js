import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      tasks:[
        {title:'one',},
      ],
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(title){
    const {tasks,} = this.state;
    tasks.push({
      title,
    });
    this.setState({
      tasks,
    });
  }
  render(){
    return (
      <div>
        <h1>Todo App</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

class TodoInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
    this.setState({
      inputValue: e.target.value,
    });
  }
  handleClick(){
    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);
    this.setState({
      inputValue:'',
    });
  }
  render(){
    return (
      <div>
        <input placeholder="input here." value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>submit</button>
      </div>
    );
  }
}

class TodoList extends Component {
  render(){
    const list = this.props.tasks.map(todo =>{
      return <TodoItem {...todo} />;
    });
    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

function TodoItem(props){
  return (
    <li>
      {props.title}
    </li>
  );
}
export default App;
