import * as React from "react";

export interface InputTodoProps { handleInput: any; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class InputTodo extends React.Component<InputTodoProps, {}> {
    handleKeyPress(ev: any) {
    console.log(ev.charCode)
    if( ev.charCode === 13) {
        this.props.handleInput(ev.target.value)
        ev.target.value = ''
      }
    }
    render() {
        return (
            <input id="inputTodo"
                   onKeyPress={(ev) => this.handleKeyPress(ev)} />
          );
    }
}
