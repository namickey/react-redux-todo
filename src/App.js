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
    tasks.unshift({
      title,
    });
    if (tasks.length > 13){
      tasks.pop();
    }
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
      <ul><li><div style={getStyle()}>
        <input placeholder="input here." value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>submit</button>
      </div></li></ul>
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
function getStyle(){
  let r = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  let g = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  let b = ('0' + Math.floor(Math.random() * 255).toString(16)).slice(-2);
  const color = '#' + r + g + b;
  const color2 = '#' + b + r + g;
  const style ={
    margin: '6px',
    border: '6px ' + color2 + ' solid',
    width: '350px',
    height: '30px',
    backgroundColor: color,
    borderTopLeftRadius: '13px',
    borderTopRightRadius: '13px',
    borderBottomLeftRadius: '13px',
    borderBottomRightRadius: '13px',
  }
  return style;
}
function TodoItem(props){
  return (
    <li>
      <div style={getStyle()}>{props.title}</div>
    </li>
  );
}
export default App;
