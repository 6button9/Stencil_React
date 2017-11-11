import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-parent',
  styleUrl: 'my-parent.scss'
})
export class MyParent{

  @Prop()  title: string;

  clickHandler(ev: UIEvent) {
    console.log('Parent-click:', ev);
  }
  render () {
    return ([
      <div>{this.title}</div>,
      <button onClick={(ev: UIEvent) => this.clickHandler(ev)}>
        Parent
      </button>,

      <slot />
    ]);
  }
}
