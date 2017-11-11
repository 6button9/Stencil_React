import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-emitter',
  styleUrl: 'my-emitter.scss'
})
export class MyEmitter {

  @Event() testEmitter: EventEmitter;
  @Prop()  title: string;

  clickHandler(ev: UIEvent) {
    console.log('Emmitter-click:', ev);
    this.testEmitter.emit(ev);
  }
  render () {
    return ([
      <button onClick={(ev: UIEvent) => this.clickHandler(ev)}>
        Emit
      </button>,
      <div>{this.title}</div>
    ]);
  }
}
