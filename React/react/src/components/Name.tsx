import * as React from "react";

export interface NameProps { first: string; last: string; }

export class Name extends React.Component<NameProps, {}> {
    render() {
        return <h1>Hello I am {this.props.first} {this.props.last}!</h1>;
    }
}
