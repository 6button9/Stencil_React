import { Component, Prop, Element, Method } from '@stencil/core';
import { runElement } from '../method/methods';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;
  @Prop() last: string;
  @Element() htmlElement: HTMLElement;

  @Method()
  postToConsole(text: string) {
    console.log(text);
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const a = Math.random();
    const colour = "rgba(" + r + "," + g + "," + b + "," + a +  ")";
    this.htmlElement.style.color = colour;
    this.htmlElement.style.fontSize = (Math.floor(Math.random()*32) +16)  +'px';
  }
  runEl(text: string) {
    console.log(text);
    runElement();
    ///callElFun('runEl-CallEl');
  }
  render() {
    return [
      <div onClick={ _ => this.postToConsole('Top')}>
        Hello, my name is {this.first} {this.last}
      </div>,
      <hr/>,
      <div onClick={ _ => this.runEl('Bottom')}>
        Helloo, my name is {this.first} {this.last}
      </div>
    ];
  }
}
