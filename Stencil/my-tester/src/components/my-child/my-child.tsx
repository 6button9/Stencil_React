import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-child',
  styleUrl: 'my-child.scss'
})
export class MyParent{

  @Prop()  title: string;

  clickHandler(ev: UIEvent) {
    console.log('Child-click:', ev);
  }
  render () {
    return ([
      <div>{this.title}</div>,
      <button onClick={(ev: UIEvent) => this.clickHandler(ev)}>
        Child
      </button>
    ]);
  }
}
