import { Component, Prop, State, Element} from '@stencil/core';
@Component({
  tag: "my-portal-el",
  styleUrl:"my-portal-el.scss"
})

export class MyPortalEl {

  @Prop() portalId: string;
  @Prop() x: number;
  @Prop() y: number;
  @Prop() bgColor: string;
  @State() show: boolean = true;
  @State() contents: JSX.Element;
  @Element() htmlElement: HTMLElement;

  componentWillLoad () {
    this.htmlElement.style.position = 'absolute';
    this.htmlElement.style.left = this.x + 'px';
    this.htmlElement.style.top = this.y + 'px';
    this.htmlElement.style.background = this.bgColor;
    this.contents = <h1>{this.portalId}</h1>;
    console.log(this.portalId, this.contents)
  }
  render () {
    return this.contents;
  }
}
