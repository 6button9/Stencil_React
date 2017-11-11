import * as React from "react";

export interface ListProps { title: string; list: string[]; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class List extends React.Component<ListProps, {}> {
    handleClick(ev: any) {
      console.log('click', ev.target)
    }
    render() {
        const myList = this.props.list.map( (item, i): JSX.Element =>
            <li key={i}
                id={i+''}
                onClick={ (ev) => this.handleClick(ev)}>{item}</li>
          );
        return (
          <div>
            <h1>{this.props.title}</h1>
            <ol>
              {myList}
            </ol>
          </div>
        );
    }
}
