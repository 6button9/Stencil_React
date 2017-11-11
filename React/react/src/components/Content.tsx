import * as React from "react";

export interface ContentProps { content: any }

export class Content extends React.Component<ContentProps, {}> {
  render() {
    return(
      <div id='content-wrapper'>
        <pre className='my-content'>
          {this.props.content.body}
        </pre>
      </div>
    );
  }
}
