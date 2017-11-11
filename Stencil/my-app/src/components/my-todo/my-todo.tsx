import { Component, Prop, State } from '@stencil/core';

var todosList = [{id: 0, todo: "first", completed: false}];

const addTodo = (todos, todo) => {
  console.log("addTodo", todo)
  const newTodos = [...todos, {id: todos.length, todo: todo, completed: false}];
  todosList = newTodos;
  return newTodos;
}

const toggleTodo = (todos, todo) => {
  let toggled = { id: todos[todo].id, todo: todos[todo].todo, completed: !todos[todo].completed};
  let newTodos = [...todos];
  newTodos[todo] = toggled;
  todosList = newTodos;
  return newTodos;
}

const deleteTodo = (todos, id) => {
  console.log("deleteTodo", id)
  let newTodos = [...todos];
  newTodos = newTodos.filter( todo => todo.id !== id)
                     .map( (t, i) => {
    return { id: i, todo: t.todo, completed: t.completed }
  })
  todosList = newTodos;
  return newTodos;
}

@Component({
  tag: 'my-todo',
  styleUrl: 'my-todo.scss'
})
export class TodoList {
  @State() todos: any[];
  @Prop() title: string;
  //todos(todo: Todo){
    //this.todos = this.todos.concat([]).push(todosList);
  //}
  componentWillLoad() {
    //let todoList = JSON.parse(localStorage.getItem("myCat")) || []
    console.log('parse-myCat', JSON.parse(localStorage.getItem('myCat')) );
    this.todos = JSON.parse(localStorage.getItem('myCat')) || [];
    console.log('mount', this.todos);
  }
  componentDidUnload() {
    console.log('dismount')
    localStorage.setItem('myCat', JSON.stringify(this.todos));
  }
  handleClick(event) {
    console.log(event.clientX)
    alert('Received the button click!');
  }
  handleKeyPress(ev) {
    if(ev.keyCode === 13) {
      this.todos = addTodo(this.todos, ev.target.value)
      ev.target.value = '';
      console.log("add", this.todos)
    }
    console.log("keyPress:", ev.key);
  }
  toggleTodo(id) {
    this.todos = toggleTodo(this.todos, id)
    console.log("toggle", id, this.todos)
  }
  deleteTodo(ev, id) {
    ev.stopPropagation();
    this.todos = deleteTodo(this.todos, id)
    console.log("delete", id, this.todos)
  }
  render() {
    const list = []
    this.todos.map((todo) => {
      !todo.completed
      ?  list.push(<li onClick={ () => this.toggleTodo(todo.id)} >
                     <div id='todo-space'></div>
                     <label>{todo.todo}</label>
                     <button class="destroy"></button>
                  </li>)
      :  list.push(<li onClick={ () => this.toggleTodo(todo.id)}
                       style={{color: 'red', textDecoration: 'line-through'}} >
                     <label>{todo.todo}</label>
                     <input class='toggle'
                            type='checkbox'
                            onChange={ (ev) => this.deleteTodo(ev, todo.id)}>
                     </input>
                     <button class="destroy"></button>
                   </li>)
     })
     console.log(list)
    return (
      <div id='todoapp'>
        <div id='header'>
          <h1>{this.title}</h1>
          <input id="new-todo"
                 onKeyPress={ (ev) => this.handleKeyPress(ev)}
                 placeholder="What needs to be done?">
          </input>
        </div>
        <section id="main">
          <ul id='todo-list'>{list}</ul>
          <input type="checkbox" id="toggle-all"></input>
        </section>
      </div>
    );
  }
}
