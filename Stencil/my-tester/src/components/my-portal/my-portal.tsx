import { Component, Prop, State} from '@stencil/core';
@Component({
  tag: "my-portal",
  styleUrl:"my-portal.scss"
})

export class MyPortal {

  @Prop() portalId: string;
  @Prop() x: number;
  @Prop() y: number;
  @Prop() bgColor: string;
  @State() show: boolean = true;
  @State() contents: JSX.Element;
  //@Element() htmlElement: HTMLElement;
  componentWillLoad () {
    this.contents = <h1>{this.portalId}</h1>;
    console.log(this.portalId, this.contents)
  }
  render () {
    const myStyle = {
      position: 'absolute',
      left: this.x + 'px',
      top: this.y + 'px',
      background: this.bgColor,
    }
    return (
      <div
        id={this.portalId}
        class='myPortal'
        style={myStyle}
        >
        {this.contents}
      </div>
    );
  }
}
