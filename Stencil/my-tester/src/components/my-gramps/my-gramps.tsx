import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-gramps',
  styleUrl: 'my-gramps.scss'
})
export class MyGramps{

  @Prop()  title: string;

  clickHandler(ev: UIEvent) {
    console.log('Parent-click:', ev);
  }
  render () {
    return (
      <my-parent title='parent' >
        <my-child title='child' />
      </my-parent>
    );
  }
}
