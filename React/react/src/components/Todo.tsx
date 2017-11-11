import * as React from "react";

import { InputTodo } from "./InputTodo";
import { List }      from "./List";

import { todos, handleInput } from "../data/my-data"

export interface TodoProps {
  title: string;
}

export class Todo extends React.Component<TodoProps, {} > {
  constructor(props: TodoProps){
    super(props);
  }
  render(){
    return (
      <div id="todoapp">
        <InputTodo handleInput={handleInput} />
        <List title={this.props.title} list={todos} />
      </div>
    );
  }
}
